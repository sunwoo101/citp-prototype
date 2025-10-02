namespace Backend.Models.Entities;

public class Word
{
    public int Id { get; set; }
    public required string English { get; set; }
    public string? Kky { get; set; }
    public string? Tsc { get; set; }
    public required string Category { get; set; }
    public string? SubmittedBy { get; set; }
    public bool UnderReview { get; set; } = false; // Set false for testing purposes
}
