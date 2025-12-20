import { useEffect } from "react";

interface RedirectProps {
  url: string;
}

const Redirect = ({ url }: RedirectProps) => {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Weiterleitung...</h1>
        <p className="text-muted-foreground">Sie werden zum Installer weitergeleitet.</p>
        <a href={url} className="text-primary hover:underline mt-4 inline-block">
          Klicken Sie hier, falls Sie nicht automatisch weitergeleitet werden.
        </a>
      </div>
    </div>
  );
};

export default Redirect;
