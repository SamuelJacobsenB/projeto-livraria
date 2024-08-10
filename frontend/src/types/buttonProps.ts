export default interface buttonProps {
    children: string | JSX.Element;
    className?: string;
    onClick?(): void;
};