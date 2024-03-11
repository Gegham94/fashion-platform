import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogoComponent } from './components/logo/logo.component';
import { ResizeEndDirective } from './directives/resize-end.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { AmountCardComponent } from './components/cards/amount-card/amount-card.component';
import { PlasticCardComponent } from './components/cards/plastic-card/plastic-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CardNumberPipe } from './pipes/card-number.pipe';
import { DepositMethodCardComponent } from './components/cards/deposit-method-card/deposit-method-card.component';
import { AllMethodCardComponent } from './components/cards/all-method-card/all-method-card.component';
import { CreditCardComponent } from './components/cards/credit-card/credit-card.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { SearchComponent } from './components/search/search.component';
import { BonusesCardComponent } from './components/cards/bonuses-card/bonuses-card.component';
import { ReadMoreButtonPopupComponent } from './components/cards/bonuses-card/read-more-button-popup/read-more-button-popup.component';
import { ChangePasswordComponent } from './components/cards/change-password/change-password.component';
import { LinkYourPhoneComponent } from './components/cards/link-your-phone/link-your-phone.component';
import { VerificationByDocumentComponent } from './components/cards/verification-by-document/verification-by-document.component';
import { TwoFactorAuthenticationComponent } from './components/cards/two-factor-authentication/two-factor-authentication.component';
import { ActiveSessionComponent } from './components/cards/active-session/active-session.component';
import { SessionHistoryComponent } from './components/cards/session-history/session-history.component';
import { EditProfileNotificationComponent } from './components/cards/edit-profile-notification/edit-profile-notification.component';
import { WalletsComponent } from './components/cards/wallets/wallets.component';
import { SendMoneyFriendsComponent } from './components/cards/send-money-friends/send-money-friends.component';
import { MultiselectAutocomplateComponent } from './components/multiselect-autocomplate/multiselect-autocomplate.component';
import { SelfExclusionComponent } from './components/cards/self-exclusion/self-exclusion.component';
import { TimeOutComponent } from './components/cards/time-out/time-out.component';
import { CasinoCardComponent } from './components/cards/casino-card/casino-card.component';
import { DepositCardComponent } from './components/cards/deposit-card/deposit-card.component';
import { SportsbookCardComponent } from './components/cards/sportsbook-card/sportsbook-card.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { EmailNumberSenderComponent } from './components/recover-password/email-number-sender/email-number-sender.component';
import { VerifyCodeComponent } from './components/recover-password/verify-code/verify-code.component';
import { CreateNewPasswordComponent } from './components/recover-password/create-new-password/create-new-password.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';

@NgModule({
  declarations: [
    LogoComponent,
    ResizeEndDirective,
    LoaderComponent,
    AmountCardComponent,
    PlasticCardComponent,
    DropdownComponent,
    CardNumberPipe,
    DepositMethodCardComponent,
    AllMethodCardComponent,
    CreditCardComponent,
    MultiselectComponent,
    SearchComponent,
    BonusesCardComponent,
    ReadMoreButtonPopupComponent,
    ChangePasswordComponent,
    SelfExclusionComponent,
    TimeOutComponent,
    LinkYourPhoneComponent,
    VerificationByDocumentComponent,
    TwoFactorAuthenticationComponent,
    ActiveSessionComponent,
    SessionHistoryComponent,
    EditProfileNotificationComponent,
    WalletsComponent,
    SendMoneyFriendsComponent,
    MultiselectAutocomplateComponent,
    CasinoCardComponent,
    DepositCardComponent,
    SportsbookCardComponent,
    RecoverPasswordComponent,
    EmailNumberSenderComponent,
    VerifyCodeComponent,
    CreateNewPasswordComponent,
    LanguageSwitcherComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LogoComponent,
    RecaptchaModule,
    ResizeEndDirective,
    LoaderComponent,
    AmountCardComponent,
    PlasticCardComponent,
    DropdownComponent,
    DepositMethodCardComponent,
    AllMethodCardComponent,
    MultiselectComponent,
    SearchComponent,
    ChangePasswordComponent,
    TimeOutComponent,
    SelfExclusionComponent,
    LinkYourPhoneComponent,
    VerificationByDocumentComponent,
    TwoFactorAuthenticationComponent,
    ActiveSessionComponent,
    SessionHistoryComponent,
    EditProfileNotificationComponent,
    WalletsComponent,
    SendMoneyFriendsComponent,
    MultiselectAutocomplateComponent,
    CasinoCardComponent,
    DepositCardComponent,
    SportsbookCardComponent,
    RecoverPasswordComponent,
    EmailNumberSenderComponent,
    VerifyCodeComponent,
    CreateNewPasswordComponent,
    LanguageSwitcherComponent,
  ],
})
export class SharedModule {}
