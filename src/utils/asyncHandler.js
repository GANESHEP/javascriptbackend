const asyncHandler = (requestHandler) => {
      (req, res, next) => {      // Explicitly return the middleware function
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((error)=> next(err))      // You have to manually call `next` for errors 
      }
}


export { asyncHandler }


//we are using high order function means passign another function as arrgument

//const asyncHandler = () => {}
//const asyncHandler = (function) => {() = >{}}
//const asyncHandler = (func) => async () => {}


//first method with try and catch method


//we create rapper function its usefull 
// const asyncHandler = (fn) = async (req,res,next) => {
//     try {
//          await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
