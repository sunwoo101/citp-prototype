using Backend.Data;
using Backend.Models.Entities;
using Backend.Models.Requests;

namespace Backend.Services;

public class WordBankService(AppDbContext context)
{
    public async Task<(bool Success, string Message)> AddWordAsync(AddWordRequest request)
    {
        if (string.IsNullOrEmpty(request.English))
            return (false, "English word is empty");

        if (string.IsNullOrEmpty(request.Category))
            return (false, "Category word is empty");

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

        return (true, "Successfully added new word");
    }
}
