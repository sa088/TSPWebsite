import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import styles from "./ProjectInquiryForm.module.scss";

const ProjectInquiryForm = () => {
    return (
        <section className={styles.inquiryFormSection}>
            <div className={styles.formContainer}>
                <div className={styles.leftPanel}>
                    <h2 className={styles.title}>Tell us about your project</h2>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <p className={styles.stepText}>
                                An expert will contact you after analyzing your requirments
                            </p>
                        </div>

                        <div className={styles.stepConnector}></div>

                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <p className={styles.stepText}>
                                An expert will contact you after analyzing your requirments
                            </p>
                        </div>

                        <div className={styles.stepConnector}></div>

                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <p className={styles.stepText}>
                                An expert will contact you after analyzing your requirments
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.rightPanel}>
                    <div className={styles.formFields}>
                        <Input type="text" placeholder="Name" className={styles.input} />
                        <Input type="email" placeholder="Email" className={styles.input} />
                        <Input type="tel" placeholder="Phone no" className={styles.input} />
                        <Textarea placeholder="Description" className={styles.textarea} />
                        <Button type="submit" className={styles.sendButton}>Send Message</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInquiryForm;