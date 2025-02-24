const PageMeta = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    document.title = title;
    const metaDescription = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
    );
    if (metaDescription) {
        metaDescription.content = description;
    } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
    }
    return null;
};

export const AppWrapper = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default PageMeta;

