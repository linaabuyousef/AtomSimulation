export const sizes: { [index: string]: string } = {
    mobile: '600px',
    tablet: '900px',
    desktop: '1200px',
  };
  
  // Iterate through the sizes and create a media template
export const media: { [index: string]: string } = Object.keys(sizes).reduce((acc: { [index: string]: string }, label: string) => {
    acc[label] = `(max-width: ${sizes[label]})`;
    return acc;
  }, {});
  