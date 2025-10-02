using Backend.Data;
using Backend.Services;
using Microsoft.EntityFrameworkCore;

namespace Backend;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddDbContext<AppDbContext>(options =>
            options.UseSqlite("Data Source=database.sqlite"));
        builder.Services.AddControllers();
        builder.Services.AddScoped<WordBankService>();

        if (builder.Environment.IsDevelopment())
        {
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
        }

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}
