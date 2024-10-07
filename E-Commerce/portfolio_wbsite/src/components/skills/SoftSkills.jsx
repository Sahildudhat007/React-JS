import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const SoftSkills = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Soft Skills</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Good Communication</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Teamwork</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Quick Learning</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SoftSkills;