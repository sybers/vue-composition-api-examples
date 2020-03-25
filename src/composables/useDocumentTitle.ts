import { Ref, watch, onBeforeUnmount } from 'vue';

type RefTitleExtractor<T> = (ref: Ref<T>) => string;

export default function useDocumentTitle<T = any>(
  ref: Ref<T>,
  extractor: RefTitleExtractor<T>
) {
  const initialDocumentTitle = document.title;

  const setDocumentTitle = () => {
    document.title = extractor(ref);
  };

  watch(ref, setDocumentTitle, { immediate: true });

  onBeforeUnmount(() => {
    document.title = initialDocumentTitle;
  });
}
