import React from 'react';
import { useForm } from 'react-hook-form';
import CheckboxLabels from '../components/Checkboxes';
import MaritalStatusButtons from '../components/MaritalStatusButtons';
import RadioButtonsGroup from '../components/RadioButtons';
import WorkPermitButtons from '../components/WorkPermit';
import P45 from '../components/P45';
import CarDriver from '../components/CarDriver';
import OwnTransport from '../components/OwnTransport';
import YesNo from '../components/YesNo';
import FullTimePartTime from '../components/FullTimePartTime';
import MultilineTextFields from '../components/MultilineTextFields';

function HookJobForm(props) {

    const { register, handleSubmit, watch } = useForm();


    const onSubmit = (values) => console.log(values);

    const watchValues = watch(['firstname', 'lastname', 'mobile', 'nino', 'include_portfolio',]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { console.log('render')}
            <section>
                <center><h1><b>Alpha Resource Consulting Ltd</b></h1></center>
                <center><h5>Unit 510, Crown House Business Centre, North Circular Road, London NW10 7PN</h5></center>
                <center><h5>Tel: 020 8965 7209 (24 Hours Line)</h5></center>
                <center><h5><a href="www.alpharesourceconsulting.co.uk">www.alpharesourceconsulting.co.uk</a> - <a href="mailto::office@alpharesourceconsulting.co.uk">office@alpharesourceconsulting.co.uk</a></h5></center>

                &nbsp;
                <h3>Personal Information</h3>
                <br />
                <div>
                    <RadioButtonsGroup>

                    </RadioButtonsGroup>

                </div>
                <br />
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input ref={register} type="text" id="firstname" name="firstname" />
                    {watchValues && watchValues['firstname'] === 'Admin' ? <span>You cannot use this</span> : <></>}
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input ref={register} type="text" id="lastname" name="lastname" />
                </div>
                <div>
                    <label htmlFor="dateofbirth">Date of Birth</label>
                    <input ref={register} type="text" id="dateofbirth" name="dateofbirth" />
                </div>
                <div>
                    <br></br>
                    <MaritalStatusButtons>

                    </MaritalStatusButtons>

                </div>
                <br></br>
                <div>
                    <label htmlFor="dependants">Dependants (Children)</label>
                    <input ref={register} type="text" id="dependants" name="dependants" />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input ref={register} type="text" id="address" name="address" />
                </div>
                <div>
                    <label htmlFor="postcode">Postcode</label>
                    <input ref={register} type="text" id="postcode" name="postcode" />
                </div>
                <div>
                    <label htmlFor="landline">Landline Number</label>
                    <input ref={register} type="text" id="landline" name="landline" />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input ref={register} type="text" id="mobile" name="mobile" />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input ref={register} type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="countryofbirth">Country of Birth</label>
                    <input ref={register} type="text" id="countryofbirth" name="countryofbirth" />
                </div>
                <br></br>
                <div>
                    <WorkPermitButtons>

                    </WorkPermitButtons>
                </div>
                <br></br>
                <div>
                    <label htmlFor="nextofkin">Name, Address and Location of Next of Kin</label>
                    <input ref={register} type="text" id="nextofkin" name="nextofkin" />
                </div>

                <div>
                    <label htmlFor="emergencycontact">Emergency Contact Telephone Numbers</label>
                    <input ref={register} type="text" id="emergencycontact" name="emergencycontact" />
                </div>
                <div>
                    <label htmlFor="nino">National Insurance Number</label>
                    <input ref={register} type="text" id="nino" name="nino" />
                </div>
                <br></br>
                <div>
                    <P45>

                    </P45>
                </div>
                <br></br>
                <div>
                    <CarDriver>


                    </CarDriver>
                </div>
                <br></br>
                <div>
                    <OwnTransport>

                    </OwnTransport>
                </div>
                <div>
                    <label htmlFor="religion">Religion</label>
                    <input ref={register} type="text" id="religion" name="religion" />
                </div>
            </section>
            <div>

                <center><h3>Statement of Caution(s) or Conviction(s)</h3></center>
                <ol>
                    <li>Under the provision of the rehabilitation of Offenders Act 1974 (Exceptions) Order 1975, applicants
                    are required to disclose information concerning convictions including those which for other purposes
                    are regarded as spent under the Act. You are therefore required to declare all criminal convictions or
                    cautions. The information you give will be treated in confidence and taken in account where the
                    offence is relevant.
</li>
                    <br></br>
                    <li><b>Have you been cautioned?</b><YesNo /></li>
                    <br></br>
                    <li><b>Have you been convicted in a Court for any offence?</b><YesNo /></li>
                    <br></br>
                    <li><b>Do you have any Criminal proceedings pending against you?</b><YesNo /></li>
                </ol>
                <div>
                    <label htmlFor="convictions">If yes, please give details of any Cautions or Convictions</label>
                    <input ref={register} type="text" id="convictions" name="convictions" />
                </div>
                <div>
                    <p><b>I declare and confirm the above information is true and I understand that knowingly to make a false
statement for this purpose may be a Criminal offence.</b></p>
                    <div>
                        <label htmlFor="convictions">Signed, Name (In Capitals) & Date</label>
                        <input ref={register} type="text" id="convictions" name="convictions" />
                    </div>
                </div>
            </div>
            <section>
                <h3>Employment History</h3>
                <br />
                <div><b>List in date order your employment for the last 5 years, up to the present time. This should
                include all professional posts, and relevant experience. Extend this record if necessary on a
separate sheet.</b></div>
                <br />
                <div>
                    <label htmlFor="current_employer">Current Employer</label>
                    <input ref={register} type="text" id="current_employer" name="current_employer" />
                </div>
                <div>
                    <label htmlFor="fromto">From - To</label>
                    <input ref={register} type="text" id="fromto" name="fromto" />
                </div>
                <div>
                    <label htmlFor="jobtitle">Job Title and Grade</label>
                    <input ref={register} type="text" id="jobtitle" name="jobtitle" />
                </div>
                <div>
                    <label htmlFor="fullpart">Full Time - Part Time?</label>
                    <input ref={register} type="text" id="fullpart" name="fullpart" />

                </div>
                <div>
                    <label htmlFor="role_description">Main Duties, Responsibilities and Significant Achievements:</label>
                    <input ref={register} type="text" id="role_description" name="role_description" />
                </div>
                <div>
                    <label htmlFor="experience">Total Years of Experience</label>
                    <input ref={register} type="text" id="experience" name="experience" />
                </div>
                <div>
                    <label htmlFor="skills">Skills</label>
                    <input ref={register} type="text" id="skills" name="skills" />
                </div>

            </section>

            <section>
                <br /><br /><br />
                <div>
                    <label htmlFor="former_employer1">Former Employer (1)</label>
                    <input ref={register} type="text" id="former_employer1" name="former_employer1" />
                </div>
                <div>
                    <label htmlFor="fromto1">From - To</label>
                    <input ref={register} type="text" id="fromto1" name="fromto1" />
                </div>
                <div>
                    <label htmlFor="jobtitle1">Job Title and Grade</label>
                    <input ref={register} type="text" id="jobtitle1" name="jobtitle1" />
                </div>
                <div>
                    <label htmlFor="fullpart1">Full Time - Part Time?</label>
                    <input ref={register} type="text" id="fullpart1" name="fullpart1" />

                </div>
                <div>
                    <label htmlFor="role_description1">Main Duties, Responsibilities and Significant Achievements:</label>
                    <input ref={register} type="text" id="role_description1" name="role_description1" />
                </div>
                <div>
                    <label htmlFor="experience1">Total Years of Experience</label>
                    <input ref={register} type="text" id="experience1" name="experience1" />
                </div>
                <div>
                    <label htmlFor="skills1">Skills</label>
                    <input ref={register} type="text" id="skills1" name="skills1" />
                </div>
            </section>
            <section>
                <br /><br /><br />
                <div>
                    <label htmlFor="former_employer2">Former Employer (2)</label>
                    <input ref={register} type="text" id="former_employer2" name="former_employer2" />
                </div>
                <div>
                    <label htmlFor="fromto2">From - To</label>
                    <input ref={register} type="text" id="fromto2" name="fromto2" />
                </div>
                <div>
                    <label htmlFor="jobtitle2">Job Title and Grade</label>
                    <input ref={register} type="text" id="jobtitle2" name="jobtitle2" />
                </div>
                <div>
                    <label htmlFor="fullpart2">Full Time - Part Time?</label>
                    <input ref={register} type="text" id="fullpart2" name="fullpart2" />

                </div>
                <div>
                    <label htmlFor="role_description2">Main Duties, Responsibilities and Significant Achievements:</label>
                    <input ref={register} type="text" id="role_description2" name="role_description2" />
                </div>
                <div>
                    <label htmlFor="experience2">Total Years of Experience</label>
                    <input ref={register} type="text" id="experience2" name="experience2" />
                </div>
                <div>
                    <label htmlFor="skills2">Skills</label>
                    <input ref={register} type="text" id="skills2" name="skills2" />
                </div>
            </section>
            <section>
                <h3>General And Professional Education And Training</h3>
                <center><div><b>Please list any examinations, courses taken, and qualification gained (e.g. GCSEs, O-Levels, A - Levels,
                BTec)


            </b>
                </div></center>
                <br />
                <div>
                    <label htmlFor="coursesubject">Course/Subject</label>
                    <input ref={register} type="text" id="coursesubject" name="coursesubject" />
                </div>
                <div>
                    <label htmlFor="levelcredits">Level/Credits</label>
                    <input ref={register} type="text" id="levelcredits" name="levelcredits" />
                </div>
                <div>
                    <label htmlFor="grade">Grade</label>
                    <input ref={register} type="text" id="grade" name="grade" />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input ref={register} type="text" id="date" name="date" />
                </div>
                <div>
                    <label htmlFor="coursetaken">Where Was The Course Taken?</label>
                    <input ref={register} type="text" id="coursetaken" name="coursetaken" />
                </div>

            </section>
            <section>
                <h3>Nurse Training School Attended (Nurses Only)</h3>
                <br />
                <div>
                    <label htmlFor="schoolname">School Name</label>
                    <input ref={register} type="text" id="schoolname" name="schoolname" />
                </div>
                <div>
                    <label htmlFor="universityname">University Name</label>
                    <input ref={register} type="text" id="universityname" name="universityname" />
                </div>
                <div>
                    <label htmlFor="datesattended">Dates Attended From - To</label>
                    <input ref={register} type="text" id="datesattended" name="datesattended" />
                </div>
                <div>
                    <p>UK CC Registered<YesNo /></p>
                </div>
                <div>
                    <label htmlFor="pin">PIN Number</label>
                    <input ref={register} type="text" id="pin" name="pin" />
                </div>
                <div>
                    <label htmlFor="expiry">Expiry Date</label>
                    <input ref={register} type="text" id="expiry" name="expiry" />
                </div>
                <div>
                    <label htmlFor="nursingqualifications">Nursing Qualifications</label>
                    <input ref={register} type="text" id="nursingqualifications" name="nursingqualifications" />
                </div>




            </section>
            <section>
                <h3>Professional Referees (Please Give at Least Two)</h3>
                <br />
                <div>
                    <label htmlFor="refereename1">Name</label>
                    <input ref={register} type="text" id="refereename1" name="refereename1" />
                </div>
                <div>
                    <label htmlFor="refereeposition1">Position</label>
                    <input ref={register} type="text" id="refereeposition1" name="refereeposition1" />
                </div>
                <div>
                    <label htmlFor="refereeaddress1">Address</label>
                    <input ref={register} type="text" id="refereeaddress1" name="refereeaddress1" />
                </div>
                <br /><br /><br />
                <div>
                    <label htmlFor="refereename2">Name</label>
                    <input ref={register} type="text" id="refereename2" name="refereename2" />
                </div>
                <div>
                    <label htmlFor="refereeposition2">Position</label>
                    <input ref={register} type="text" id="refereeposition2" name="refereeposition2" />
                </div>
                <div>
                    <label htmlFor="refereeaddress2">Address</label>
                    <input ref={register} type="text" id="refereeaddress2" name="refereeaddress2" />
                </div>
                <br /><br /><br />
                <div>
                    <label htmlFor="refereename3">Name</label>
                    <input ref={register} type="text" id="refereename3" name="refereename3" />
                </div>
                <div>
                    <label htmlFor="refereeposition3">Position</label>
                    <input ref={register} type="text" id="refereeposition3" name="refereeposition3" />
                </div>
                <div>
                    <label htmlFor="refereeaddress3">Address</label>
                    <input ref={register} type="text" id="refereeaddress3" name="refereeaddress3" />
                </div>
                <br /><br /><br />
                <div>
                    <label htmlFor="refereename4">Name</label>
                    <input ref={register} type="text" id="refereename4" name="refereename4" />
                </div>
                <div>
                    <label htmlFor="refereeposition4">Position</label>
                    <input ref={register} type="text" id="refereeposition4" name="refereeposition4" />
                </div>
                <div>
                    <label htmlFor="refereeaddress4">Address</label>
                    <input ref={register} type="text" id="refereeaddress4" name="refereeaddress4" />
                </div>


            </section>
            <br /><br />
            <section>
                <h6>All Referees Are Asked To Reply Using Their Organizations Headed Note Paper </h6>
                <br />
                <h6>Unfortunately, We Are Unable To Accept Personal References</h6>
                <br />
                <h6>All Information Remains Confidential</h6>
                <br />
                <h6>Please Note, We Always Follow Up References</h6>
            </section>
            <br />
            <section>
                <h3>Continuing Professional Education And Training</h3>
                <div>
                    <label htmlFor="subjectmatter">Type Of Event and Subject Matter</label>
                    <input ref={register} type="text" id="subjectmatter" name="subjectmatter" />
                </div>
                <div>
                    <label htmlFor="duration">Duration (Hours/Days)</label>
                    <input ref={register} type="text" id="duration" name="duration" />
                </div>
                <div>
                    <label htmlFor="durationdate">Date</label>
                    <input ref={register} type="text" id="durationdate" name="durationdate" />
                </div>
                <div>
                    <label htmlFor="organiserlocation">Organiser and Location</label>
                    <input ref={register} type="text" id="organiserlocation" name="organiserlocation" />
                </div>
                <br />
                <h6>Please Remember to Include Copies of Certificate for Courses Passed (i.e., Lifting, Handling, Food Hygiene,
Counselling etc.)</h6>
            </section>
            <br />
            <section>
                <h3>Availability</h3>
                <li>Part Time <YesNo /></li>
                <li>Full Time <YesNo /></li>
                <li>Days <YesNo /></li>
                <li>Nights <YesNo /></li>
                <br />
                <div>
                    <label htmlFor="currentposition">Current Position</label>
                    <input ref={register} type="text" id="currentposition" name="currentposition" />
                </div>
                <div>
                    <label htmlFor="fromto2">From - To</label>
                    <input ref={register} type="text" id="fromto2" name="fromto2" />
                </div>
                <div>
                    <label htmlFor="specialization">Please State Specialization and Preferences in Various Branches of Nursing</label>
                    <input ref={register} type="text" id="specialization" name="specialization" />
                </div>


            </section>
            <br />
            <section>
                <h3>Interviews</h3>
                <h6>When You Are Asked To Attend an Interview, Please Bring With You the Following:</h6>
                <br />
                <ol>
                    <li>2 Passport size photographs</li>
                    <br />
                    <li>Your Bank or Building Society details</li>
                    <br />
                    <li>Your PIN No. and statement of entry to UKCC (if applicable)</li>
                    <br />
                    <li>Any certificates or evidence of experience and qualifications</li>
                    <br />
                    <li>Work Permit (if applicable)</li>
                    <br />
                    <li>A P45</li>
                    <br />
                    <li>A Passport/Birth certificate (proof of identity)</li>
                    <br />
                    <li>Proof of Immunisation against infectious diseases (Rubella, Hepatitis, TB, etc.)</li>
                </ol>
            </section>
            <br /><br /><br />
            <section>
                <h3>Additional Information</h3>
                <h6>(Membership of a union or professional organisation)</h6>
                <br />
                <MultilineTextFields>

                </MultilineTextFields>
            </section>
            <br />
            <section>
                <h3>Health Screening Questionnaire Confidential</h3>
                <h6>The Information on This Form Will
Remain Confidential and Will not Be Divulged to a Third Party</h6>
                <br />
                <div>
                    <label htmlFor="height">Height</label>
                    <input ref={register} type="text" id="height" name="height" />

                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <input ref={register} type="text" id="weight" name="weight" />
                </div>
                <br />
                <li>Are You In Good Health?<YesNo /></li>
                <li>Have You Ever Had Any Serious Ilness?<YesNo /></li>
                <li>Have You Ever Had Time Off Work In The Last 12 Months?<YesNo /></li>
                <li>Have You Ever Had To Leave Work For Health Reasons?<YesNo /></li>
                <li>Do You Take Any Form of Medication?<YesNo /></li>
                <li>Are you receiving any form of treatment?<YesNo /></li>
                <li>Are There Any Reasons Why You Should Not Be Offered Work on Night Duty?<YesNo /></li>
                <div>
                    <label htmlFor="ifyesexplain">If Yes Explain</label>
                    <input ref={register} type="text" id="ifyesexplain" name="ifyesexplain" />
                </div>
                <br />
                <li>If You Are Requesting Work on Night Duty, Are You Willing
To Have a Health Screening To Confirm That You Are Fit?<YesNo /></li>
            </section>
            <br /><br />
            <section>
                <h6>Do you suffer from any of the following?</h6>
                <br /><br />
                <li>Mental Illness<YesNo /></li>
                <li>Epliepsy<YesNo /></li>
                <li>Fainting<YesNo /></li>
                <li>Headaches/Migraines<YesNo /></li>
                <li>Allergies/Skin Rashes<YesNo /></li>
                <li>Hay Fever/Chest Infection<YesNo /></li>
                <li>Sore Throats<YesNo /></li>
                <li>Diabetes/Thyroid<YesNo /></li>
                <li>Asthma<YesNo /></li>
                <li>High Blood Pressure<YesNo /></li>
                <li>Back Problems<YesNo /></li>
                <li>Jaundice<YesNo /></li>
                <br />
                <div>
                    <label htmlFor="otherilnesses">Are There Any Further Illnesses,Infections or Health Issues Which May Interfere With Your Ability
to Carry Out Your Duties?</label>
                    <input ref={register} type="text" id="otherilnesses" name="otherilnesses" />
                </div>
                <br />
                <h6>This signed application form is deemed to be a contract of employment.
                I agree that I will not divulge personal or medical details of any client placed in my care. I confirm the
                information in this form to be true and correct. I understand that completion of this form will place me
under no financial obligation and that I have received a copy of the Agency’s terms and conditions.</h6>

                insert Date & Applicant Signature here (Signature Pad?)

            </section>
            <section>
                <h3>Agreement to Opt Out of Regulation 4 (1) of The Working Time Regulations 1998</h3>
                <br /><br />
                <h6>About Maximum of 48 hours Weekly Limit</h6>
                <br />
                <h6>Please Sign This Agreement if You Wish to Continue Working For More Than 48 Hours per Week</h6>
                <br />
                <div>
                    <label htmlFor="nameagreement">Name</label>
                    <input ref={register} type="text" id="nameagreement" name="nameagreement" />
                </div>
                <div>
                    <label htmlFor="residenceaddress">Address of Residence</label>
                    <input ref={register} type="text" id="residenceaddress" name="residenceaddress" />
                </div>
                <br />
                <h6>I agree with ALPHA RESOURCE CONSULTING LTD that the limit stated in regulation 4 (1) of the
                Working Time Regulations 1998, of a maximum of 48 hours per week shall not apply to me. My
                average working time per seven-day period, as calculated in accordance with the Working Time
                Regulation 1998, may therefore exceed 48 hours.
</h6>
                <br />
                <h6>This agreement shall apply from the date of signing (or agreed future date)</h6>
                <br />
                <h6>I agree to comply with all policies of ALPHA RESOURCE CONSULTING LTD from time to time in
                force, which relate to the maintenance of records of my hours of work.
</h6>
                <br />
                <h6>This agreement can be terminated by my giving notice in writing to ALPHA RESOURCE
CONSULTING LTD.</h6>
                <br />
INSERT SIGNATURE PAD HERE (EMPLOYEE) + DATE
<br />
INSERT SIGNATURE PAD HERE (on behalf of ALPHA RESOURCE CONSULTING LTD) + DATE
<br /><br />
                <div>
                    <label htmlFor="nameagreement2">Name</label>
                    <input ref={register} type="text" id="nameagreement2" name="nameagreement2" />
                </div>

            </section>
            <section>
                <h3>Social Medial Links (Optional)</h3>
                <br />
                <div>
                    <label>
                        <input
                            ref={register}
                            className="filled-in"
                            type="checkbox"
                            name="include_portfolio"
                            id="include_portfolio" />
                        <span>Include Portfolio Links?</span>
                    </label>
                </div>
                <br />
                <div>
                    <label>
                        <input
                            ref={register}
                            className="filled-in"
                            type="checkbox"
                            name="include_social"
                            id="include_social" />
                        <span>Include Social Media Links?</span>
                    </label>
                </div>
                <br />
                {watchValues && watchValues['include_portfolio'] && <div>
                    <label htmlFor="portfolio_links">Portfolio links</label>
                    <input ref={register} type="text" id="portfolio_links" name="portfolio_links" />
                </div>}
                {watchValues && watchValues['include_social'] && <div>
                    <label htmlFor="social_media_links">Social Media Links</label>
                    <input ref={register} type="text" id="social_media_links" name="social_media_links" />
                </div>}

            </section>
            <section>
                <h3>Uploads</h3>
                <br />
                <div>
                    <label htmlFor="resume">Select Resume</label>
                    <br />
                    <input type="file" id="resume" />
                </div>
                <br /><br />
                <div>
                    <label htmlFor="cover_letter">Select Cover Letter</label>
                    <br />
                    <input type="file" id="cover_letter" />
                </div>
            </section>
            <br /><br />
            <button type="submit" className="btn">Submit Form</button>
        </form>
    );
}

export default HookJobForm;