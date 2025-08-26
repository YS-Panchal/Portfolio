const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground font-body">
          © {currentYear} YS Company, a subsidiary of VISION GROUP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;