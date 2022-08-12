import React from 'react';
import '../style/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className='bg-black text-white px-44 py-16'>
      <span className='text-5xl text-red-500'>Privacy Policy of <b>NotGitHub</b></span>
      <p className='text-xl mt-32'>In order to receive information about your Personal Data, the purposes and the parties the Data is shared with, contact the Owner.</p>
      
      <div className='text-left'>
        <p className='text-4xl mt-32 font-bold'>Owner and Data Controller<br />Types of Data collected</p>
        <p className='text-left mt-4'>The owner does not provide a list of Personal Data types collected.
          Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
          Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
          Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.
          Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
          Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
          Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
        </p>

        <p className='text-4xl mt-32 font-bold'> Mode and place of processing the Data <br /></p>
        <p className='text-2xl font-semibold'>Methods of processing</p>
        <p className='mt-4'>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
          The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time
        </p>
        <p className='text-2xl mt-8 font-semibold'>Legal basis of processing</p>
        <p className='mt-4'>
          The Owner may process Personal Data relating to Users if one of the following applies:
          <ul className='list-disc marker:text-white ml-8'>
            <li>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</li>
            <li>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</li>
            <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
            <li>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</li>
            <li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li>
          </ul>
          In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
        </p>
        <p className='text-2xl mt-12 font-semibold'>Place</p>
        <p className='mt-4'>
          The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.
          Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.
          Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.<br /><br />
          If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.
        </p>
        <p className='text-2xl mt-12 font-semibold'>Retention time</p>
        <p className='mt-4'>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.
          Therefore:
          <ul className='list-disc marker:text-white ml-8'>
            <li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</li>
            <li>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.</li>
          </ul>

          The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.<br /><br />
          Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.

        </p>

        <p className='text-4xl mt-32 font-bold'> The rights of Users <br /></p>
        <p className='mt-4'>Users may exercise certain rights regarding their Data processed by the Owner.
          In particular, Users have the right to do the following:
          <ul className='list-disc marker:text-white ml-8'>
            <li><b>Withdraw their consent at any time.</b> Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</li>
            <li><b>Object to processing of their Data.</b> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.</li>
            <li><b>Access their data.</b> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.</li>
            <li><b>Verify and seek rectification.</b> Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</li>
            <li><b>Restrict the processing of their Data.</b> Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.</li>
            <li><b>Have their Personal Data deleted or otherwise removed.</b> Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.</li>
            <li><b>Receive their Data and have it transferred to another controller.</b> Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.</li>
            <li><b>Lodge a complaint.</b> Users have the right to bring a claim before their competent data protection authority.</li>
          </ul>
        </p>
        <p className='text-2xl mt-12 font-semibold'>Details about the right to object to processing</p>
        <p className='mt-4'>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.
          Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.
        </p>
        <p className='text-2xl mt-12 font-semibold'>How to exercise these rights</p>
        <p className='mt-4'>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.</p>

        <p className='text-4xl mt-32 font-bold'> Additional information about Data collection and processing <br /></p>
        <p className='text-2xl mt-12 font-semibold'>Legal action</p>
        <p className='mt-4'>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.
          The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities
        </p>
        <p className='text-2xl mt-12 font-semibold'>Additional information about User's Personal Data</p>
        <p className='mt-4'>In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.</p>
        <p className='text-2xl mt-12 font-semibold'>System logs and maintenance</p>
        <p className='mt-4'>For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.</p>
        <p className='text-2xl mt-12 font-semibold'>Information not contained in this policy</p>
        <p className='mt-4'>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.</p>
        <p className='text-2xl mt-12 font-semibold'>How "Do Not Track" requests are handled</p>
        <p className='mt-4'>This Application does not support “Do Not Track” requests.
          To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.
        </p>
        <p className='text-2xl mt-12 font-semibold'>Changes to this privacy policy</p>
        <p className='mt-4 pb-32'>The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.<br /><br />
          Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.
        </p>
      </div>
      <hr />
    </div>
  )
}

export default PrivacyPolicy