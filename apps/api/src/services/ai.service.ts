export const generateScript = async (
  product: string
) => {

  return {
    title: `${product} Advertisement`,
    scenes: [
      {
        order:1,
        script:`Introducing the amazing ${product}`
      },
      {
        order:2,
        script:`Experience quality and innovation with ${product}`
      },
      {
        order:3,
        script:`Get yours today`
      }
    ]
  };

};