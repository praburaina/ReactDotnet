var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options=>
{
    options.AddPolicy("AllowedPolicy",(policy)=>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

//app.UseHttpsRedirection();

app.UseCors("AllowedPolicy");

app.MapGet("/api/hotels", () =>
{
    var hotels = new[]
    {
        new {id=1,Name="TajHotels",city="chennai",Price=5000},
        new {id=2,Name="TajHotels",city="chennai",Price=5000},
        new {id=3,Name="TajHotels",city="chennai",Price=5000},
    };

    return Results.Ok(hotels);
})
.WithName("GetWeatherForecast");

app.Run();

