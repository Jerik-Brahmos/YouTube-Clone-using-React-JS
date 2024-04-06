export const API_KEY="AIzaSyAdwwzK1zvZHxGLzyxrzqH7iiReF5K4Gyw";
export const Like_converter=(likes)=>{
    if(likes>1000000){
        return Math.floor(likes/1000000)+'M';
    }
    else if(likes>1000){
        return Math.floor(likes/1000)+'K';
    }
    else{
        return likes;
    }
}