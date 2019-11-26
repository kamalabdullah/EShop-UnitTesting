using Integrant.EShop.Data.Contracts.DTOs;
using Integrant.EShop.Data.Contracts.Repositories;
using Moq;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Integrant.EShop.Services.Test.XUnit
{
    [ExcludeFromCodeCoverage]
    public class ProductServiceTest
    {
        private ProductService productService;
        public ProductServiceTest()
        {
            var productRepoMock = new Mock<IProductRepository>();
            productRepoMock.Setup(s => s.GetProductById(It.IsAny<int>())).ReturnsAsync(new Data.Contracts.DTOs.ProductInfo());
            productService = new ProductService(productRepoMock.Object);
        }

        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        public async Task GetProductByIdShouldNotNullTest(int Id)
        {
            var product = await productService.GetProductById(Id);
            Assert.NotNull(product);
        }
        [Theory]
        [InlineData(-1)]
        [InlineData(0)]
        public async Task GetProductByIdShouldBeNullTest(int Id)
        {
            var product = await productService.GetProductById(Id);
            Assert.Null(product);
        }
        [Fact]
        public void ShouldThrowExceptionIfProductRepositoryIsNull()
        {
            var exception = Assert.Throws<ArgumentNullException>(() => new ProductService(null));
            Assert.Equal("productRepository", exception.ParamName);
        }

    }
}
