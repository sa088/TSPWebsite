import React from "react";
import styles from "./ContactUs.module.scss";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactUs = () => {
    return (
        <div className={styles.contactUsSection}>
            <div className={`w-full flex flex-col lg:flex-row ${styles.contactUsWrapper}`}>
                <div className="lg:w-1/2 pt-5 pb-10 lg:pe-8 lg:py-10 text-[#FFFFFF]">
                    <h2 className="text-[22px] font-[700] mb-5 lg:mb-15">
                        Let’s Create Something Amazing Together!
                    </h2>
                    <p className="text-[18px] font-[500]">
                        Don’t hesitate – drop us a line! Your next big idea could be just
                        one message away.
                    </p>
                </div>

                <div className={`lg:w-1/2 p-6 lg:p-10 ${styles.contactUsForm}`}>
                    <h3 className="font-semibold text-lg mb-4">Let’s Connect</h3>
                    <Select>
                        <SelectTrigger className={styles.customSelectTrigger}>
                            <SelectValue placeholder="How can we help you?" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="help">How can we help you?</SelectItem>
                            <SelectItem value="inquiry">General Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="mb-4">
                        <Input className={styles.inputField} placeholder="Name" />
                    </div>
                    <div className="mb-4">
                        <Input className={styles.inputField} placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <Input className={styles.inputField} placeholder="Phone no" />
                    </div>
                    <div className="mb-10">
                        <Textarea
                            className={styles.inputTextarea}
                            placeholder="Description"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button className={styles.messagebutton}>
                            Message Now
                            <span className={styles.customIcon}>
                                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect x="8" y="4" width="7" height="7" fill="currentColor" />
                                        <rect x="15" y="11" width="7" height="7" fill="currentColor" />
                                        <rect x="8" y="18" width="7" height="7" fill="currentColor" />
                                    </g>
                                </svg>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;