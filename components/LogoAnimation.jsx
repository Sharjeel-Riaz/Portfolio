import React, { useEffect } from "react";

function LogoAnimation() {
  useEffect(() => {
    const intro = document.querySelector(".intro");
    const logoSpan = document.querySelectorAll(".intro-logo");

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (idx + 1) * 400);
      });

      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove("active");
            span.classList.add("fade");
          }, (idx + 1) * 50);
        });
      }, 2000);

      setTimeout(() => {
        intro.style.transform = "translateY(-100vh)";
      }, 2300);
    }, 0);

    // Clean up the event listeners on component unmount (optional)
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className="intro">
      <h1 className="logo-header">
        <span className="intro-logo">Sharjeel </span>{" "}
        <span className="intro-logo">Riaz.</span>
      </h1>
    </div>
  );
}

export default LogoAnimation;
