const products = {
  data: [
    {
      id: '1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZoEHhuXgMZ-_dsRHlcj7qjU5IbsunTJejg&usqp=CAU',
      name: 'Shirt',
      descript: 'Mens Shirt',
      category: 'Clothing',
      brand: 'Levis',
      sizes: [
        { id: 1, size: 's' },
        { id: 2, size: 'M' },
        { id: 3, size: 'L' },
        { id: 4, size: 'XL' },
      ],
      oldPrice: 34,
      newPriceL: 24,
      discount: 5,
      inStock: true,
      isProductExpressDelivery: true,
      isTrending: true,
      isExchangeAvailable: true
    }
  ]
}

module.exports = products