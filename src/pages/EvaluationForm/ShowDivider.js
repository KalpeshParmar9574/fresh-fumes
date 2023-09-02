export const ShowDivider=(Array,index)=>{
    if(index==0){
        // debugger;
        if(Array[index]?.questions==[]){
            if(Array[index+1]?.questions!=[]) {
                return true
            }else{
                return false
            }
        }else{
            return false;
        } 
    }else{
        if(Array[index]?.questions==[]){
            if(Array[index+1]?.questions!=[]) {
                return true
            }else{
                return false
            }
        }else{
            return true;
        } 
    }
    
}