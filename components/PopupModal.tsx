"use client";
import { useEffect } from 'react';
import Link from 'next/link';

const PopupModal = () => {
    useEffect(() => {
        // Trigger generic bootstrap modal show if jquery is available
        // Note: In a real Next.js app with React Bootstrap, we'd use state.
        // But since we are using legacy JS scripts as per migration:
        if (typeof window !== 'undefined' && (window as any).$ && (window as any).$('#myModal').modal) {
            (window as any).$('#myModal').modal('show');
        }
    }, []);

    return (
        <div id="myModal" className="modal fade new_popup_form" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Bharathi Institute</h4>
                    </div>
                    <form method="post" action="">
                        <div className="modal-body">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" required />
                            <label>Email ID</label>
                            <input type="email" name="email" placeholder="Enter Your Email ID" required />
                            <label>Phone Number</label>
                            <input type="tel" name="tel" placeholder="Enter Your Phone Number" required />
                        </div>

                        <div className="term_con">
                            <p className="term_p">By continuing to submit, you agree to our terms of Use Service and that you have read the <Link href="/privacy-policy">Privacy Policy.</Link></p>
                            <p className="term_p_fl">
                                <input type="checkbox" name="agree" id="agreeCheckbox" required />
                                <span>I hereby authorize the sending of notifications via SMS, messages, promotional, and informational messages.</span>
                            </p>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" name="submit" className="btn btn-default">Submit</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
