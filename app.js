const imageInput = document.querySelector("[data-image-input]");
const imagePreviewElement = document.querySelector("[data-image-preview]");

imageInput.onchange = () => {
  const [file] = imageInput.files;
  imagePreviewElement.src = URL.createObjectURL(file);
};
