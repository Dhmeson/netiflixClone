import { ToastAndroid } from "react-native";
interface toastProps{
    text:string
}
export const ToastMessage = ({text}:toastProps) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      10,
      500
);}