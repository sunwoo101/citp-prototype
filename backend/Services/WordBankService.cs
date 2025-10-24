using Backend.Data;
using Backend.Models.Entities;
using Backend.Models.Requests;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services;

public class WordBankService(AppDbContext context)
{
    public async Task<(bool Success, string Message, Word? Word)> WotdAsync()
    {
        var day = DateOnly.FromDateTime(DateTime.UtcNow);
        int seed = day.DayNumber;
        //seed = (int)DateTimeOffset.UtcNow.ToUnixTimeSeconds(); // For testing

        int count = await context.Words.CountAsync();
        if (count == 0)
            return (false, "No words found", null);

        var rnd = new Random(seed);
        int index = rnd.Next(count);

        var word = await context.Words
        .OrderBy(w => w.Id)
        .Skip(index)
        .FirstOrDefaultAsync();

        return (true, "Successfully added new word", word);
    }

    public async Task<(bool Success, string Message)> AddWordAsync(AddWordRequest request)
    {
        if (string.IsNullOrEmpty(request.English))
            return (false, "English word is empty");

        if (string.IsNullOrEmpty(request.Kky))
            return (false, "Kalaw Kawaw Ya word is empty");

        if (string.IsNullOrEmpty(request.Category))
            return (false, "Category word is empty");

        if (await context.Words.AnyAsync(w => request.English == w.English && request.Kky == w.Kky))
            return (false, "Word already exists");

        var newWord = new Word
        {
            English = request.English,
            Kky = request.Kky,
            Tsc = request.Tsc,
            Category = request.Category,
            SubmittedBy = request.SubmittedBy,
            UnderReview = false,
        };

        context.Words.Add(newWord);
        await context.SaveChangesAsync();

        return (true, "Entry has been submitted for approval");
    }

    public async Task<(bool Success, string Message, List<Word> Words)> GetWordsAsync(GetWordsRequest request)
    {
        int pageSize = (request.ResultsPerPage.HasValue && request.ResultsPerPage > 0)
            ? request.ResultsPerPage.Value
            : 20;

        int pageNumber = (request.PageNumber.HasValue && request.PageNumber > 0)
            ? request.PageNumber.Value
            : 1;

        // Remove these once db gets big
        pageNumber = 1;
        pageSize = 10000;

        string? partial = request.EnglishPartial?.Trim();
        string? category = request.Category?.Trim();

        var q = context.Words.AsQueryable();

        if (!string.IsNullOrEmpty(partial))
        {
            string p = partial.ToLower();
            q = q.Where(w => EF.Functions.Like(w.English.ToLower(), $"{p}%"));
        }

        if (!string.IsNullOrEmpty(category))
        {
            string c = category.ToLower();
            q = q.Where(w => w.Category.ToLower() == c);
        }

        q = q.OrderBy(w => w.English.ToLower());

        List<Word> words = await q
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync();

        if (words.Count == 0)
            return (false, "No words found", new List<Word>());

        return (true, "Successfully retrieved words", words);
    }

    public async Task<(bool Success, string Message, int Count)> GetCountAsync()
    {
        int count = await context.Words.CountAsync();
        return (true, "Success", count);
    }
}
