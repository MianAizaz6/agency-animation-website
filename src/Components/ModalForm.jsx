import { useState } from "react"
import { useForm, ValidationError } from '@formspree/react';
import { thankyou } from "../../static-img-urls";

// eslint-disable-next-line react/prop-types
const ModalForm = ({ name }) => {
    const [state, handleSubmit] = useForm("xblrydgp");
    const [packageSelect, setPackageSelect] = useState(name);

    if (state.succeeded) {
        return (<div className="flex gap-4 w-full h-full glass-effect  px-[20px] py-[10px] items-center justify-evenly">
            <div className=" flex flex-col gap-2 w-[40%]">
                <h1 className="!text-[28px] font-bold  main-heading m-0 !text-left mt-10">Thank You for Reaching Out!</h1>
                <p className="text-xl text-left text-white">We’ve received your information and will get back to you shortly.</p>
            </div>
            <div className="w-[40%]">
                <img className="w-full h-auto object-cover" src={thankyou} alt="" />
            </div>
        </div>);
    }

    return (
        <div className="flex flex-col glass-effect  px-[20px] py-[10px] text-white">
            <h2 className="text-2xl mb-6">{name}</h2>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <label className="block flex-1">
                        First Name
                        <input
                            type="text"
                            name="firstName"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                        <ValidationError
                            prefix="First Name"
                            field="firstName"
                            errors={state.errors}
                        />
                    </label>
                    <label className="block flex-1">
                        Last Name
                        <input
                            type="text"
                            name="lastName"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                    </label>
                    <ValidationError
                        prefix="Last Name"
                        field="lasttName"
                        errors={state.errors}
                    />
                </div>

                <div className="flex gap-4">
                    <label className="block flex-1">
                        Email Address
                        <input
                            type="email"
                            name="email"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </label>
                    <label className="block flex-1">
                        Phone Number
                        <input
                            type="tel"
                            name="phone"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                        <ValidationError
                            prefix="Phone"
                            field="phone"
                            errors={state.errors}
                        />
                    </label>
                </div>

                <div className="flex gap-4">
                    <label className="block flex-1">
                        Company/Organization Name
                        <input
                            type="text"
                            name="company"
                            required
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                        <ValidationError
                            prefix="Company"
                            field="company"
                            errors={state.errors}
                        />
                    </label>
                    <label className="block flex-1">
                        Website URL (optional)
                        <input
                            type="url"
                            name="website"
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                        <ValidationError
                            prefix="Website"
                            field="website"
                            errors={state.errors}
                        />
                    </label>
                </div>
                <div className="flex gap-4">
                    <label className="block flex-1">
                        Instagram Handle (optional)
                        <input
                            type="text"
                            name="instagram"
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                        <ValidationError
                            prefix="Instagram"
                            field="instagram"
                            errors={state.errors}
                        />
                    </label>
                    <label className="block flex-1">
                        Tiktok Handle (optional)
                        <input
                            type="url"
                            name="tiktok"
                            className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        />
                        <ValidationError
                            prefix="Tiktok"
                            field="tiktok"
                            errors={state.errors}
                        />
                    </label>
                </div>

                <label className="block">
                    Preferred Package
                    <select
                        name="package"
                        required
                        value={packageSelect}
                        onChange={(e) => { setPackageSelect(e.target.value) }}
                        className="mt-1 p-2 text-black border border-gray-300 rounded w-full"
                    >
                        <option value="">Select a Package</option>
                        <option value="Starter Instagram Package">Starter Instagram Package</option>
                        <option value="TikTok Growth Package">TikTok Growth Package</option>
                        <option value="Social Media Management Plus">Social Media Management Plus</option>
                        <option value="Comprehensive Social Media Management">Comprehensive Social Media Management</option>
                        <option value="Social Media Management Pro">Social Media Management Pro</option>
                        <option value="Ultimate Social Media Mastery">Ultimate Social Media Mastery</option>
                    </select>
                </label>
                <label className="block">
                    Specific Requirements/Goals
                    <textarea
                        name="message"
                        className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </label>
                <button className=" w-fit py-3 bg-black px-20 font-bold rounded-md  transition-all leading-[1.4rem]  ">
                    <p className="title !text-[1.2rem] !leading-[1.4rem] m-0">
                        Submit
                    </p>
                </button>
            </form>
        </div>
    )
}

export default ModalForm