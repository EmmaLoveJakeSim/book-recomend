
document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 1. ELEMENTS
  // ========================================
  const progress = document.getElementById("readingProgress");
  const backToTop = document.getElementById("backToTop");
  const revealItems = document.querySelectorAll(".reveal");
  const navMenu = document.getElementById("mainMenu");

  // ========================================
  // 2. READING PROGRESS + BACK TO TOP
  // ========================================
  function updateScrollUI() {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;

    const percent = scrollable > 0
      ? (window.scrollY / scrollable) * 100
      : 0;

    if (progress) {
      progress.style.width = `${percent}%`;
    }

    if (backToTop) {
      backToTop.classList.toggle("visible", window.scrollY > 350);
    }
  }

  window.addEventListener("scroll", updateScrollUI, {
    passive: true
  });

  updateScrollUI();

  // ========================================
  // 3. REVEAL SECTIONS ON SCROLL
  // ========================================
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  }

  // ========================================
  // 4. BACK TO TOP
  // ========================================
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches ? "auto" : "smooth"
      });
    });
  }

  // ========================================
  // 5. CLOSE MOBILE MENU
  // ========================================
  if (navMenu && window.bootstrap) {
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (
          window.innerWidth < 992 &&
          navMenu.classList.contains("show")
        ) {
          bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
        }
      });
    });
  }

  // ========================================
  // 6. ENHYPEN × DARK MOON SECRET AGENTS
  // ========================================
  const members = {
    jungwon: {
      name: "Jungwon",
      character: "Jakah",
      birthday: "1936-10-02",
      citizen: "Yevkin",
      occupation: "Surgeon",
      agentCode: "240314",
      codeName: "SURGEON",
      height: "174 cm",
      hairColor: "White",
      eyeColor: "Green",
      description: "ศัลยแพทย์ผู้ใช้รหัสลับ SURGEON",
      cover:  "images/gallery/jungwon-2.jpg",
      gallery: [
        "images/gallery/jungwon-2.jpg",
        "images/jungwon.jpg",
        "images/gallery/jungwon-3.webp"
      ]
    },

    heeseung: {
      name: "Heeseung",
      character: "Heli",
      birthday: "1933-10-02",
      citizen: "Yevkin",
      occupation: "Bar Master",
      agentCode: "086001",
      codeName: "MARTINI",
      height: "187 cm",
      hairColor: "Black",
      eyeColor: "Yellow",
      description: "บาร์มาสเตอร์ผู้ใช้รหัสลับ MARTINI",
      cover:  "images/gallery/heeseung-2.jpg",
      gallery: [
        "images/gallery/heeseung-2.jpg",
        "images/heeseung.jpg",
        "images/gallery/heeseung-3.webp"
      ]
    },

    jay: {
      name: "Jay",
      character: "Jaan",
      birthday: "1934-10-02",
      citizen: "Yevkin",
      occupation: "Taxi Driver",
      agentCode: "135092",
      codeName: "BLACK CAT",
      height: "174 cm",
      hairColor: "Grey",
      eyeColor: "Amber",
      description: "คนขับแท็กซี่ผู้ใช้รหัสลับ BLACK CAT",
      cover:  "images/gallery/jay-2.jpg",
      gallery: [
        "images/gallery/jay-2.jpg",
        "images/jay.jpg",
        "images/gallery/jay-3.webp"
      ]
    },

    jake: {
      name: "Jake",
      character: "Jino",
      birthday: "1934-10-02",
      citizen: "Yevkin",
      occupation: "Pilot",
      agentCode: "523741",
      codeName: "BUFFALO",
      height: "181 cm",
      hairColor: "Red",
      eyeColor: "Green",
      description: "นักบินผู้ใช้รหัสลับ BUFFALO",
      cover: "images/gallery/jake-2.jpg",
      gallery: [
        "images/gallery/jake-2.jpg",
        "images/jake.jpg",
        "images/gallery/jake-3.webp"
      ]
    },

    sunghoon: {
      name: "Sunghoon",
      character: "Solon",
      birthday: "1935-10-02",
      citizen: "Yevkin",
      occupation: "Ballerino",
      agentCode: "177155",
      codeName: "CANINE",
      height: "182 cm",
      hairColor: "Blue",
      eyeColor: "Blue / Yellow",
      description: "นักบัลเลต์ผู้ใช้รหัสลับ CANINE",
      cover:  "images/gallery/sunghoon-2.jpg",
      gallery: [
        "images/gallery/sunghoon-2.jpg",
        "images/sunghoon.jpg",
        "images/gallery/sunghoon-3.webp"
      ]
    },

    sunoo: {
      name: "Sunoo",
      character: "Shion",
      birthday: "1935-10-02",
      citizen: "Yevkin",
      occupation: "Bellboy",
      agentCode: "852371",
      codeName: "SUNSHINE",
      height: "179 cm",
      hairColor: "Blond",
      eyeColor: "Yellow",
      description: "พนักงานยกกระเป๋าผู้ใช้รหัสลับ SUNSHINE",
      cover: "images/gallery/sunoo-2.jpg",
      gallery: [
        "images/gallery/sunoo-2.jpg",
        "images/sunoo.jpg",
        "images/gallery/sunoo-3.webp"
      ]
    },

    niki: {
      name: "Ni-ki",
      character: "Noa",
      birthday: "1938-10-02",
      citizen: "Yevkin",
      occupation: "Toy Store Owner",
      agentCode: "210099",
      codeName: "TEDDY",
      height: "184 cm",
      hairColor: "Purple",
      eyeColor: "Yellow Green",
      description: "เจ้าของร้านขายของเล่นผู้ใช้รหัสลับ TEDDY",
      cover: "images/gallery/ni-ki-2.jpg",
      gallery: [
        "images/gallery/ni-ki-2.jpg",
        "images/ni-ki.jpg",
        "images/gallery/ni-ki-3.webp"
      ]
    }
  };

  // ========================================
  // 7. BOOTSTRAP MODAL + PHOTO CAROUSEL
  // ========================================
  const modalElement = document.getElementById("characterModal");
  const carouselElement = document.getElementById("memberCarousel");

  if (!modalElement || !carouselElement || !window.bootstrap) {
    console.warn(
      "ไม่พบ Bootstrap, #characterModal หรือ #memberCarousel"
    );
    return;
  }

  const memberName = document.getElementById("modalMemberName");
  const characterName = document.getElementById("modalCharacterName");
  const memberDescription = document.getElementById("modalDescription");
  const carouselInner = carouselElement.querySelector(".carousel-inner");
  const carouselIndicators =
    carouselElement.querySelector(".carousel-indicators");

  if (!carouselInner) {
    console.warn("ไม่พบ .carousel-inner");
    return;
  }

  const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

  const carousel = bootstrap.Carousel.getOrCreateInstance(
    carouselElement,
    {
      interval: false,
      ride: false,
      touch: true,
      wrap: true
    }
  );

  // ========================================
  // 8. CREATE GALLERY
  // ========================================
  function createGallery(member) {
    carousel.pause();
    carouselInner.innerHTML = "";

    if (carouselIndicators) {
      carouselIndicators.innerHTML = "";
    }

    member.gallery.forEach((imagePath, index) => {
      const slide = document.createElement("div");
      slide.className =
        `carousel-item${index === 0 ? " active" : ""}`;

      const image = document.createElement("img");
      image.src = imagePath;
      image.alt = `${member.name} - ${member.character} รูปที่ ${index + 1}`;
      image.className = "d-block w-100";
      image.loading = index === 0 ? "eager" : "lazy";

      image.addEventListener("error", () => {
        if (image.dataset.fallbackUsed !== "true") {
          image.dataset.fallbackUsed = "true";
          image.src = member.cover;
        } else {
          image.alt = "ไม่พบไฟล์รูป กรุณาตรวจสอบชื่อไฟล์";
        }
      });

      slide.appendChild(image);
      carouselInner.appendChild(slide);

      if (carouselIndicators) {
        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.setAttribute(
          "data-bs-target",
          "#memberCarousel"
        );
        indicator.setAttribute(
          "data-bs-slide-to",
          String(index)
        );
        indicator.setAttribute(
          "aria-label",
          `รูปที่ ${index + 1}`
        );

        if (index === 0) {
          indicator.classList.add("active");
          indicator.setAttribute("aria-current", "true");
        }

        carouselIndicators.appendChild(indicator);
      }
    });
  }

  // ========================================
  // 9. DISPLAY SECRET AGENT INFORMATION
  // ========================================
  function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value ?? "-";
    }
  }

  function openMember(memberId) {
    const member = members[memberId];

    if (!member) {
      console.warn(`ไม่พบข้อมูลสมาชิก: ${memberId}`);
      return;
    }

    setText("modalMemberName", member.name);
    setText("modalCharacterName", member.character);
    setText("modalDescription", member.description);

    setText("modalBirthday", member.birthday);
    setText("modalCitizen", member.citizen);
    setText("modalOccupation", member.occupation);
    setText("modalAgentCode", member.agentCode);
    setText("modalCodeName", member.codeName);
    setText("modalHeight", member.height);
    setText("modalHairColor", member.hairColor);
    setText("modalEyeColor", member.eyeColor);

    createGallery(member);
    modal.show();
  }

  // ========================================
  // 10. CLICK MEMBER CARDS
  // ========================================
  document.querySelectorAll("[data-member]").forEach((card) => {
    card.addEventListener("click", () => {
      openMember(card.dataset.member);
    });

    if (
      card.tagName !== "BUTTON" &&
      card.tagName !== "A"
    ) {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      card.addEventListener("keydown", (event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          openMember(card.dataset.member);
        }
      });
    }
  });
});
