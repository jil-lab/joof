import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface RichTextRendererProps {
  content: unknown;
}

const RichTextRenderer = ({ content }: RichTextRendererProps) => {
  if (!content) return null;

  return (
    <div className="prose prose-lg max-w-none
      prose-headings:font-bold prose-headings:text-gray-900
      prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
      prose-p:text-gray-700 prose-p:leading-relaxed
      prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline
      prose-strong:text-gray-900 prose-strong:font-semibold
      prose-ul:list-disc prose-ol:list-decimal
      prose-li:text-gray-700
      prose-blockquote:border-l-4 prose-blockquote:border-teal-500
      prose-blockquote:pl-4 prose-blockquote:italic
      prose-img:rounded-lg prose-img:shadow-md
      prose-code:bg-gray-100 prose-code:text-teal-600
      prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
      <BlocksRenderer content={content as Parameters<typeof BlocksRenderer>[0]['content']} />
    </div>
  );
};

export default RichTextRenderer;
