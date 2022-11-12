import { Children, createContext } from "react";
interface credentialsContext {
  email: string;
  
}
export const CredentialsCtx = createContext<credentialsContext >({email:""});
const initialValue:credentialsContext={email:""}

 export default function ProviderCtxCredentials({children}:any){
    return(
      <CredentialsCtx.Provider value={initialValue}>
        {children}
      </CredentialsCtx.Provider>
    )
 } 
