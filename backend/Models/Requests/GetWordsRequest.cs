namespace Backend.Models.Requests;

public class GetWordsRequest
{
    public string? EnglishPartial { get; set; }
    public string? Category { get; set; }
    public int? PageNumber { get; set; }
    public int? ResultsPerPage { get; set; }
}
