FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

COPY ./kierannoble.dev/*.csproj ./
RUN dotnet restore

COPY ./kierannoble.dev/. ./
RUN dotnet publish -c Release -o /app/publish

RUN mkdir -p /app/wwwroot/image_cache
VOLUME /app/wwwroot/image_cache

FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_ENVIRONMENT=Production

EXPOSE 8080

ENTRYPOINT ["dotnet", "kierannoble.dev.dll"]
