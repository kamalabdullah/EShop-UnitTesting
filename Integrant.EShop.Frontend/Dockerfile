#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-nanoserver-1903 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-nanoserver-1903 AS build
WORKDIR /src
COPY ["Integrant.EShop.Frontend/Integrant.EShop.Frontend.csproj", "Integrant.EShop.Frontend/"]
COPY ["Integrant.EShop.Services.Contracts/Integrant.EShop.Services.Contracts.csproj", "Integrant.EShop.Services.Contracts/"]
COPY ["Integrant.EShop.Data.Contracts/Integrant.EShop.Data.Contracts.csproj", "Integrant.EShop.Data.Contracts/"]
COPY ["Integrant.EShop.Data.Repositories/Integrant.EShop.Data.Repositories.csproj", "Integrant.EShop.Data.Repositories/"]
COPY ["Integrant.EShop.Data.Context/Integrant.EShop.Data.Context.csproj", "Integrant.EShop.Data.Context/"]
COPY ["Integrant.EShop.Data.Entities/Integrant.EShop.Data.Entities.csproj", "Integrant.EShop.Data.Entities/"]
COPY ["Integrant.EShop.Services/Integrant.EShop.Services.csproj", "Integrant.EShop.Services/"]
RUN dotnet restore "Integrant.EShop.Frontend/Integrant.EShop.Frontend.csproj"
COPY . .
WORKDIR "/src/Integrant.EShop.Frontend"
RUN dotnet build "Integrant.EShop.Frontend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Integrant.EShop.Frontend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Integrant.EShop.Frontend.dll"]