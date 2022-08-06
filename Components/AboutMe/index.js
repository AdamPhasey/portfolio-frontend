
function AboutMe() {
//   const handleOpen = event => {
//     event.preventDefault()
//     const { target: { dataset: { modal }}} = event
//     if (modal) setOpen(modal)
//   }

//   const handleClose = () => {
//     setOpen('')
//   }

  return (
      <div className="flex flex-col items-center">
        <h1 className="text-[5vmax] md:text-[4vmax] font-Montserrat-Alternates">
          5 things about me
        </h1>
        <p className="text-white text-[1.5vmax] md:text-[1vmax]">Click each word for more</p>
      </div>
  );
}

export { AboutMe };
