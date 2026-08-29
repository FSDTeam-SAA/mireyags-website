import React from 'react'
import PersonalInformationForm from './_components/personal-information-form'
import ProfilePicture from './_components/profile-picture'

const PersonalInformationPage = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:py-14'>
        <ProfilePicture/>
        <PersonalInformationForm/>
    </div>
  )
}

export default PersonalInformationPage
