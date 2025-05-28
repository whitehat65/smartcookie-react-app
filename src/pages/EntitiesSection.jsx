import React from "react";
import EntityCard from "../component/EntityCard";

const entities = [
  [
    {
      type: "link",
      href: "https://smartcookie.in/Clogin/login/student",
      value: "student",
      imgSrc: "/assets/images/student1.png",
      label: "Student",
    },
    {
      type: "link",
      href: "https://smartcookie.in/Clogin/login/teacher",
      value: "teacher",
      imgSrc: "/assets/images/teacher_icon1.png",
      label: "Teacher",
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "1",
      imgSrc: "/assets/images/school_admin.jpg",
      label: "School Admin",
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "7",
      imgSrc: "/assets/images/school_admin_staff.jpg",
      label: "School Admin Staff",
      style: { height: "", width: "170px" },
      imgSize: { height: 100, width: 130 },
    },
  ],
  [
    {
      type: "link",
      href: "https://smartcookie.in/Clogin/login/employee",
      value: "employee",
      imgSrc: "/assets/images/employee_icon.png",
      label: "Employee",
    },
    {
      type: "link",
      href: "https://smartcookie.in/Clogin/login/manager",
      value: "manager",
      imgSrc: "/assets/images/maneger_icon.png",
      label: "Manager",
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "11",
      imgSrc: "/assets/images/hr_admin.png",
      label: "HR Admin",
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "71",
      imgSrc: "/assets/images/hr_admin_staff.png",
      label: "HR Admin Staff",
      style: { height: "185px", width: "170px" },
    },
  ],
  [
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "12",
      imgSrc: "/assets/images/group_admin1.jpg",
      label: "Group Admin",
      style: { marginTop: "30px" },
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "13",
      imgSrc: "/assets/images/group_admin_staff1.png",
      label: "Group Admin Staff",
      style: { height: "185px", width: "170px" },
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "6",
      imgSrc: "/assets/images/cookie_admin1.png",
      label: "Cookie Admin",
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "8",
      imgSrc: "/assets/images/admin_staff.jpg",
      label: "Cookie Admin Staff",
      style: { height: "185px", width: "170px" },
      imgSize: { height: 100, width: 130 },
    },
  ],
  [
    {
      type: "link",
      href: "https://smartcookie.in/Clogin/login/sponsor",
      value: "sponsor",
      imgSrc: "/assets/images/sponser_icon.png",
      label: "Sponsors",
    },
    {
      type: "form",
      action: "https://smartcookie.in/core/login.php",
      value: "5",
      imgSrc: "/assets/images/parent_icon.jpg",
      label: "Parent",
    },
    {
      type: "link",
      href: "https://smartcookie.in/Clogin/login/salesperson",
      value: "salesperson",
      imgSrc: "/assets/images/salesperson_icon1.png",
      label: "Sales Person",
    },
  ],
];

const EntitiesSection = () => {
  return (
    <section
      className="client-area no-padding wow fadeIn py-8"
      id="team"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Entities</h2>
        </div>

        {/* Render all entities in a responsive grid */}
        <div className="grid gap-8 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-4">
          {entities.flat().map((entity, index) => (
            <EntityCard key={index} entity={entity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntitiesSection;