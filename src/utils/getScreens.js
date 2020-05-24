export const getScreens = screen =>{

  const screens = {

    desktop : '1200px',
    tablet: '800px',
    mobile : '400px'
  }

  return screens[screen];
}