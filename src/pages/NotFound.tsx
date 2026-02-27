import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container py-20">
      <div className="max-w-xl">
        <div className="text-4xl font-extrabold">404</div>
        <div className="mt-2 text-lg font-bold">Page not found</div>
        <p className="mt-2 text-muted-foreground">
          The page you’re looking for doesn’t exist. Use the navigation or go back home.
        </p>
        <div className="mt-6">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
