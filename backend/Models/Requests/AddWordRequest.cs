namespace Backend.Models.Requests;

public class AddWordRequest
{
    public string? English { get; set; }
    public string? Kky { get; set; }
    public string? Tsc { get; set; }
    public string? Category { get; set; }
    public string? SubmittedBy { get; set; }
}
