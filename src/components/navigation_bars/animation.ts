 export const firstBar ={
    show:{
        rotate: '45deg',
        y:'3px',
        x:'2px',
        transition: {
            duration: 0.3
          },
    },
    hidden:{
        rotate: '0deg',
        transition: {
            duration: 0.3
          },
    }
}

export const secondBar ={
    show:{
        rotate: '-45deg',
        y:'-5px',
        x:'2px',
        transition: {
            duration: 0.3
          },
    },
    hidden:{
        rotate: '0deg',
        transition: {
            duration: 0.3
          },
    } 
}
export const thirdBar ={
    show:{
        opacity : 0,
        y: '10px',
        transition: {
            duration: 0.3
          },
    },
    hidden:{
        opacity : 1,
        transition: {
            duration: 0.3
          },
    } 
}