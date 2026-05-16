"use client";

import { Button, Input, Label, DatePicker, Select, ListBox, RadioGroup, Radio, TextArea, Checkbox, Card } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar, DateField } from "@heroui/react";

export function SignUpForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    gender: false,
  });

  const validateName = (value: string) => /^[a-zA-Z\s\-']+$/.test(value);
  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePhone = (value: string) => /^[0-9+\-\s()]+$/.test(value) && value.replace(/\D/g, "").length >= 10;
  const validatePassword = (value: string) => {
    return /[A-Z]/.test(value) && /[a-z]/.test(value) && /[@#$%]/.test(value) && /[0-9]/.test(value) && value.length >= 8;
  };

  const isFormValid = firstName.length > 0 && validateName(firstName) && lastName.length > 0 && validateName(lastName) && email.length > 0 && validateEmail(email) && gender.length > 0 && acceptedTerms;

  const firstNameError = touched.firstName && (firstName.length === 0 || !validateName(firstName));
  const lastNameError = touched.lastName && (lastName.length === 0 || !validateName(lastName));
  const emailError = touched.email && (email.length === 0 || !validateEmail(email));
  const phoneError = phone.length > 0 && !validatePhone(phone);
  const passwordError = password.length > 0 && !validatePassword(password);
  const confirmPasswordError = confirmPassword.length > 0 && confirmPassword !== password;

  return (
    <Card className="bg-slate-800 p-6 max-w-sm w-full mx-4 relative">
      <Link href="/" className="absolute top-2 right-2 text-slate-400 hover:text-white">
        <Button isIconOnly size="sm" variant="ghost">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </Button>
      </Link>
      <h2 className="text-white text-center text-xl mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">First Name <span className="text-red-500">*</span></Label>
          <Input placeholder="Enter your first name" type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value); setTouched((p) => ({ ...p, firstName: true })); }} className={firstNameError ? "border-red-500" : ""} />
          {firstNameError && <p className="text-red-500 text-xs mt-1">{firstName.length === 0 ? "This field is required" : "Please enter a valid name"}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Last Name <span className="text-red-500">*</span></Label>
          <Input placeholder="Enter your last name" type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); setTouched((p) => ({ ...p, lastName: true })); }} className={lastNameError ? "border-red-500" : ""} />
          {lastNameError && <p className="text-red-500 text-xs mt-1">{lastName.length === 0 ? "This field is required" : "Please enter a valid name"}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Email <span className="text-red-500">*</span></Label>
          <Input placeholder="name@example.com" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setTouched((p) => ({ ...p, email: true })); }} className={emailError ? "border-red-500" : ""} />
          {emailError && <p className="text-red-500 text-xs mt-1">{email.length === 0 ? "This field is required" : "Please enter a valid email"}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Phone Number</Label>
          <Input placeholder="Enter your phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={phoneError ? "border-red-500" : ""} />
          {phoneError && <p className="text-red-500 text-xs mt-1">Please enter a valid phone number</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Birth Date</Label>
          <DatePicker className="w-full" name="date">
            <DateField.Group fullWidth>
              <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
              <DateField.Suffix>
                <DatePicker.Trigger>
                  <DatePicker.TriggerIndicator />
                </DatePicker.Trigger>
              </DateField.Suffix>
            </DateField.Group>
            <DatePicker.Popover>
              <Calendar aria-label="Birth date">
                <Calendar.Header>
                  <Calendar.YearPickerTrigger>
                    <Calendar.YearPickerTriggerHeading />
                    <Calendar.YearPickerTriggerIndicator />
                  </Calendar.YearPickerTrigger>
                  <Calendar.NavButton slot="previous" />
                  <Calendar.NavButton slot="next" />
                </Calendar.Header>
                <Calendar.Grid>
                  <Calendar.GridHeader>{(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}</Calendar.GridHeader>
                  <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                </Calendar.Grid>
                <Calendar.YearPickerGrid>
                  <Calendar.YearPickerGridBody>
                    {({ year }) => <Calendar.YearPickerCell year={year} />}
                  </Calendar.YearPickerGridBody>
                </Calendar.YearPickerGrid>
              </Calendar>
            </DatePicker.Popover>
          </DatePicker>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <Label className="text-blue-400 text-sm font-medium">Gender <span className="text-red-500">*</span></Label>
            <Select className="w-full" selectedKey={gender || undefined} onSelectionChange={(key) => { setGender(key as string); setTouched((p) => ({ ...p, gender: true })); }}>
              <Select.Trigger><Select.Value /><Select.Indicator /></Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item key="male">Male</ListBox.Item>
                  <ListBox.Item key="female">Female</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
            {touched.gender && gender.length === 0 && <p className="text-red-500 text-xs mt-1">This field is required</p>}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <Label className="text-blue-400 text-sm font-medium">Marital Status</Label>
            <RadioGroup defaultValue="single" orientation="horizontal" className="flex flex-row gap-4 pt-2">
              <Radio value="single">
                <Radio.Control><Radio.Indicator /></Radio.Control>
                <Radio.Content><Label className="text-white">Single</Label></Radio.Content>
              </Radio>
              <Radio value="married">
                <Radio.Control><Radio.Indicator /></Radio.Control>
                <Radio.Content><Label className="text-white">Married</Label></Radio.Content>
              </Radio>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Description</Label>
          <TextArea placeholder="Write your description here..." rows={4} />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Password</Label>
          <div className="relative">
            <Input placeholder="Enter your password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className={passwordError ? "border-red-500 pr-10" : "pr-10"} />
            <Button isIconOnly size="sm" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              )}
            </Button>
          </div>
          {passwordError && <p className="text-red-500 text-xs mt-1">Password must be 8+ chars with upper, lower, number, special (@#$%)</p>}
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-blue-400 text-sm font-medium">Confirm Password</Label>
          <Input placeholder="Confirm your password" type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={confirmPasswordError ? "border-red-500" : ""} />
          {confirmPasswordError && <p className="text-red-500 text-xs mt-1">Passwords do not match</p>}
        </div>
        <Checkbox id="terms" className="text-white" isSelected={acceptedTerms} onChange={setAcceptedTerms}>
          <Checkbox.Control><Checkbox.Indicator /></Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="terms" className="text-white text-sm">
              I agree to the{" "}
              <Link href="/pages/privacy" className="text-amber-400 hover:text-amber-300">Privacy Policy</Link> and{" "}
              <Link href="/pages/terms" className="text-amber-400 hover:text-amber-300">Terms & Conditions</Link>
            </Label>
          </Checkbox.Content>
        </Checkbox>
        <div className="flex flex-row gap-4 mt-2">
          <Button type="button" onClick={() => router.push("/")} className="bg-slate-600 text-white hover:bg-slate-500 flex-1">Cancel</Button>
          <Button type="submit" isDisabled={!isFormValid} className="bg-amber-500 text-slate-800 hover:bg-amber-400 flex-1 disabled:bg-slate-600 disabled:text-slate-400">Create Your Account</Button>
        </div>
      </form>
      <p className="text-slate-400 text-center text-sm mt-4">
        Already have an account? <Link href="/login" className="text-blue-400 hover:text-blue-300">Login</Link>
      </p>
    </Card>
  );
}