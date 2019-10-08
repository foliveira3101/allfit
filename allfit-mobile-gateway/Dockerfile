FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["allfit-mobile-gateway/allfit-mobile-gateway.csproj", "allfit-mobile-gateway/"]
RUN dotnet restore "allfit-mobile-gateway/allfit-mobile-gateway.csproj"
COPY . .
WORKDIR "/src/allfit-mobile-gateway"
RUN dotnet build "allfit-mobile-gateway.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "allfit-mobile-gateway.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "allfit-mobile-gateway.dll"]