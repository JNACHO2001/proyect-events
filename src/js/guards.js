
export function authGuard(route,path) {
    const auth =JSON.parse(localStorage.getItem("current"))
    const isProtected =route.protected
    const isPùblic= ["/login","/register","/"].includes(path)


    if (isProtected && !auth) {
        alert("debes iniciar seccion")
          return("/login")
        
    }

    if (auth && isPùblic) {
        return("/home")
        
    }

    return null;
    
}