import { Ref, watch } from "vue";

export default function useDocumentTitle(ref: Ref) {
  const setDocumentTitle = () => {
    document.title = ref.value;
  };

  watch(ref, setDocumentTitle);
  setDocumentTitle();
}
