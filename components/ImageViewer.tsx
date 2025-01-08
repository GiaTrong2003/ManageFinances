import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";
// type ImageSource để định nghĩa kiểu dữ liệu cho nguồn anh

// type: định nghĩa 1 tập hợp các giá trị có thể có và kiểu dữ liệu của chúng
type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
