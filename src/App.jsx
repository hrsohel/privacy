import React from 'react';
import './App.css';

function App() {
  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <h1>Givano Privacy Policy</h1>
        <p className="draft-notice">Draft for owner review — replace all bracketed fields before publishing.</p>
        <div className="meta-info">
          <p><strong>Effective date:</strong> <span className="highlight">[Date this policy takes effect]</span></p>
          <p><strong>Last updated:</strong> 7 October 2026</p>
        </div>
      </header>

      <main className="privacy-content">
        <section>
          <h2>1. Who we are</h2>
          <p>Givano is an app that lets users publish and browse item listings, arrange pickups, and communicate with other users. This policy explains how personal information is handled when you use Givano and contact our support team.</p>
          <p>The organization responsible for your information is <span className="highlight">[Legal company or developer name]</span>, located at <span className="highlight">[Business address and country]</span>. Contact us at <span className="highlight">[Privacy contact email]</span>.</p>
        </section>

        <section>
          <h2>2. Information we collect</h2>
          <div className="info-block">
            <h3>Account information</h3>
            <p>When you register or sign in, we process your name, email address, account identifier, authentication information, and verification information. If you sign in through Google or Apple, we receive the identity information and authentication credentials made available through that service. Apple may provide a private relay email address if you choose to hide your email.</p>
          </div>
          
          <div className="info-block">
            <h3>Profile information</h3>
            <p>You may provide a profile photo, phone number, and address, and update your name and other profile details.</p>
          </div>
          
          <div className="info-block">
            <h3>Listings and activity</h3>
            <p>We process the listing titles, descriptions, categories, photos, pickup addresses, and availability details you submit. We also process your favourites and actions needed to manage your listings.</p>
          </div>
          
          <div className="info-block">
            <h3>Messages and attachments</h3>
            <p>We process messages, images, conversation participants, and related conversation information to deliver chat features. Messages and images you send are available to the other participants. <span className="highlight">[Confirm whether staff may access messages, and describe the circumstances and safeguards.]</span></p>
          </div>
          
          <div className="info-block">
            <h3>Support information</h3>
            <p>When you contact support, we process the information you submit, including your request and information needed to respond.</p>
          </div>
          
          <div className="info-block">
            <h3>Notification information</h3>
            <p>We process device push notification tokens and notification status information so we can deliver account, listing, and message notifications.</p>
          </div>
          
          <div className="info-block">
            <h3>Technical information</h3>
            <p>Our service providers and infrastructure may process information such as IP addresses, app installation identifiers, device or operating system information, and service logs to operate and protect the service. <span className="highlight">[Confirm the exact information collected by your backend, hosting provider, and enabled SDKs.]</span></p>
          </div>
          
          <div className="info-block">
            <h3>Local storage</h3>
            <p>The app stores information on your device, including sign-in session information and preferences, to keep you signed in and support app functionality.</p>
          </div>
        </section>

        <section>
          <h2>3. How we use information</h2>
          <p>We use information to create and manage accounts; authenticate users; display and manage profiles and listings; support favourites; deliver messages and notifications; help users arrange pickups; respond to support requests; manage blocking and account deletion; and maintain the service.</p>
          <p><span className="highlight">[Confirm any additional purposes, including fraud prevention, moderation, diagnostics, analytics, marketing, or legal compliance. Describe them here if applicable.]</span></p>
          <p>Where a lawful basis is required, <span className="highlight">[identify the lawful bases applicable to your operations and users, such as performing a contract, consent for optional processing, legitimate interests with appropriate safeguards, or legal obligations]</span>.</p>
        </section>

        <section>
          <h2>4. What other users can see</h2>
          <p>Listing information, including photos and pickup addresses, is displayed to users who can access the listing. Your displayed name and profile image may appear with listings and conversations. Messages and attachments are shared with their recipients.</p>
          <p>Only include information in listings and messages that you intend to share. In particular, consider using an appropriate public pickup location instead of publishing a private home address.</p>
          <p><span className="highlight">[Confirm whether phone numbers, profile addresses, favourites, and any other profile fields are visible to other users, and describe that visibility accurately.]</span></p>
        </section>

        <section>
          <h2>5. Permissions and device access</h2>
          <ul className="permission-list">
            <li><strong>Camera and selected photos.</strong> When you choose to take or upload a photo for a listing, profile, or chat, the app uses the camera or photo selection functionality. Photos you submit are uploaded to provide the requested feature.</li>
            <li><strong>Notifications.</strong> The app requests notification permission where required. You can change this permission in your device settings.</li>
            <li><strong>Location.</strong> Givano processes addresses you enter for your profile or pickup listings. The reviewed app code does not implement device GPS collection. <span className="highlight">[Confirm this remains accurate for the published app and remove or update this statement if location collection is added.]</span></li>
            <li><strong>Microphone.</strong> <span className="highlight">[Confirm whether the published app uses the microphone. The current iOS configuration declares microphone access, but an audio recording feature was not established from the reviewed code. Remove an unused permission or describe its actual use before publication.]</span></li>
          </ul>
          <p>You can manage device permissions in system settings. Disabling a permission may prevent the related optional feature from working.</p>
        </section>

        <section>
          <h2>6. Sharing and service providers</h2>
          <p>We share information with other users as described above and with service providers needed to operate Givano. The app integrates Google/Firebase for authentication and push notifications, and Google and Apple for optional sign-in. Our application backend processes account, profile, listing, support, and chat information.</p>
          <p><span className="highlight">[Identify your hosting, database, file storage, email, support, and other providers; explain the information shared with them and their purposes.]</span></p>
          <p>Provider privacy information is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a> and <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">https://www.apple.com/legal/privacy/</a>.</p>
          <p><span className="highlight">[Confirm whether information is disclosed for legal requests, protection of rights, or business transfers, and describe the circumstances.]</span></p>
          <p><span className="highlight">[State whether you sell personal information, share it for targeted advertising, or use advertising or analytics services. These business practices cannot be verified from the mobile code alone.]</span></p>
        </section>

        <section>
          <h2>7. Retention and account deletion</h2>
          <p>We retain information for the periods described below:</p>
          <ul className="styled-list">
            <li>Account and profile data: <span className="highlight">[Retention period or criteria]</span>.</li>
            <li>Listings and uploaded photos: <span className="highlight">[Retention period, including after listing or account deletion]</span>.</li>
            <li>Messages and attachments: <span className="highlight">[Retention period and treatment of recipient copies after deletion]</span>.</li>
            <li>Support records and technical logs: <span className="highlight">[Retention periods]</span>.</li>
            <li>Backups: <span className="highlight">[Backup expiry period and deletion process]</span>.</li>
            <li>Records retained for legal or security purposes: <span className="highlight">[Specific categories, reasons, and periods, if applicable]</span>.</li>
          </ul>
          
          <p>You can request account deletion using the account deletion option on the Profile screen and confirming your choice. You can also request deletion without reinstalling the app at <span className="highlight">[Public account deletion request URL]</span>, or contact <span className="highlight">[Privacy contact email]</span>. We may request information needed to verify that you own the account; do not send us your password.</p>
          <p><span className="highlight">[Describe which account data is deleted, which is retained and why, how shared conversations are handled, and the completion timeframe. Confirm the backend actually performs the described deletion.]</span></p>
          <p>Uninstalling the app alone does not delete your account or server-stored information.</p>
        </section>

        <section>
          <h2>8. Security</h2>
          <p>Givano connects to its application backend using HTTPS. <span className="highlight">[Describe the security measures actually implemented for stored information, access control, authentication, and backups. Do not claim end-to-end encryption or encryption at rest unless verified.]</span></p>
          <p>No method of electronic transmission or storage is completely secure. Contact us if you believe your account or information has been compromised.</p>
        </section>

        <section>
          <h2>9. Your choices and rights</h2>
          <p>You can update supported profile fields, manage your listings, change notification permissions, and request account deletion. Depending on where you live, you may also have rights to access, correct, receive a copy of, delete, or restrict use of your personal information, object to certain processing, or withdraw consent where processing relies on consent.</p>
          <p>Contact <span className="highlight">[Privacy contact email]</span> to make a request. We may verify your identity before responding. <span className="highlight">[Specify applicable response periods, any authorized representative procedure, and relevant regulator or complaint information for the markets you serve.]</span></p>
        </section>

        <section>
          <h2>10. Children</h2>
          <p><span className="highlight">[Specify the actual minimum age and intended audience. Explain whether the service is available to children and any parental consent process that applies. Do not select an age threshold without checking your target markets and business policy.]</span></p>
          <p>If you believe a child has provided information contrary to this policy, contact <span className="highlight">[Privacy contact email]</span> so we can investigate and take appropriate action.</p>
        </section>

        <section>
          <h2>11. International processing</h2>
          <p><span className="highlight">[Identify the countries or regions where Givano and its providers process or store personal information. Explain applicable safeguards for international transfers where required.]</span></p>
        </section>

        <section>
          <h2>12. Changes to this policy</h2>
          <p>We may update this policy when our features or information practices change. We will update the date above and <span className="highlight">[describe how users will be informed of material changes]</span>. Where required, we will obtain consent before applying a new use of information.</p>
        </section>

        <section className="contact-section">
          <h2>13. Contact</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <strong>App</strong>
              <span>Givano</span>
            </div>
            <div className="contact-item">
              <strong>Responsible organization</strong>
              <span className="highlight">[Legal company or developer name]</span>
            </div>
            <div className="contact-item">
              <strong>Privacy email</strong>
              <span className="highlight">[Privacy contact email]</span>
            </div>
            <div className="contact-item">
              <strong>Postal address</strong>
              <span className="highlight">[Business address and country]</span>
            </div>
            <div className="contact-item">
              <strong>Account deletion request page</strong>
              <span className="highlight">[Public account deletion request URL]</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="review-notes">
        <h3>Owner review notes — remove before publishing</h3>
        <p>This draft reflects the mobile app source reviewed on 7 October 2026. Backend behavior, actual provider configurations, business practices, and jurisdiction-specific obligations have not been verified.</p>
        <p>Replace every bracketed field; confirm visibility of user information, retention, backend deletion, service providers, age eligibility, and transfer locations. Resolve the microphone permission mismatch. Verify whether diagnostics, analytics, advertising, or additional SDK collection occur in the release build.</p>
        <p>Publish the final policy at a publicly accessible URL and link it in the app and store listing. Google Play requires apps that support account creation to provide an in-app deletion path and a web resource for requesting account and associated data deletion. The current app has an in-app deletion flow; a working public deletion resource and backend deletion behavior still need confirmation.</p>
        <p>Reference: <a href="https://support.google.com/googleplay/android-developer/answer/13327111?hl=en" target="_blank" rel="noopener noreferrer">Google Play Data safety section</a></p>
      </footer>
    </div>
  );
}

export default App;
