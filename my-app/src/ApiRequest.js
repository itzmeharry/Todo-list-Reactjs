const ApiRequest = async (url = '', optionsObj= null, errMsg =null) => {
 try{
const response = fetch (url,optionsObj)
if (!response.ok) throw ("Please reload the app")
 }catch(error){
 errMsg = error.Meassage
 }finally{
return errMsg
 }
}

export default ApiRequest