FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["allfit-customers-api/allfit-customers-api.csproj", "allfit-customers-api/"]
RUN dotnet restore "allfit-customers-api/allfit-customers-api.csproj"
COPY . .
WORKDIR "/src/allfit-customers-api"
RUN dotnet build "allfit-customers-api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "allfit-customers-api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "allfit-customers-api.dll"]