import { Component, createSignal, onMount } from "solid-js";
import Logo from "../assets/logo.svg";
import Hero from "../components/Hero";
import Terminal from "../components/Terminal";
import Code from "../components/Terminal/code";
import { Link } from "solid-app-router";

const Index: Component = () => {
  return (
    <div class="w-full flex flex-col gap-[102px] pb-10">
      <div class="mx-4 md:mx-[123px]">
        <div class="pt-[49px] w-full flex items-center justify-between text-xl">
          <div class="flex gap-2 items-center text-white relative">
            <img src={Logo} />
            <span class="invisible md:visible">from</span>
            <h1 class="absolute invisible pl-1 font-extrabold select-none md:visible pointer-events-none right-4 z-50">
              Dimension
            </h1>
            <Link class="box invisible md:visible" href="https://dimension.dev">
              <h1 class="invisible md:visible px-4 py-2">Dimension</h1>
            </Link>
          </div>
          <div class="flex gap-4">
            <Link href="https://github.com/dimensionhq/fleet">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link href="https://discord.gg/qgytYy6vTP">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2701 5.33005C17.9401 4.71005 16.5001 4.26005 15.0001 4.00005C14.987 3.99963 14.9739 4.00209 14.9618 4.00728C14.9497 4.01246 14.9389 4.02023 14.9301 4.03005C14.7501 4.36005 14.5401 4.79005 14.4001 5.12005C12.8091 4.88005 11.1911 4.88005 9.60012 5.12005C9.46012 4.78005 9.25012 4.36005 9.06012 4.03005C9.05012 4.01005 9.02012 4.00005 8.99012 4.00005C7.49012 4.26005 6.06012 4.71005 4.72012 5.33005C4.71012 5.33005 4.70012 5.34005 4.69012 5.35005C1.97012 9.42005 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84005 19.3101 5.35005C19.3001 5.34005 19.2901 5.33005 19.2701 5.33005V5.33005ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
        <Hero />
        <Terminal />
        <div class="w-full h-full flex items-center justify-center flex-col text-white gap-8">
          <div class="md:w-[614px] flex flex-col gap-8 items-center justify-center">
            <h1 class="text-5xl font-extrabold ">let’s fleet_</h1>
            <Code
              onClick={() => {
                window.navigator.clipboard.writeText(
                  "curl -L get.fleet.dime.dev | sh"
                );
              }}
            >
              <div class="flex justify-between">
                <h1>{">"} curl -L get.fleet.dime.dev | sh</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.503 4.627L5.5 6.75V17.254C5.5 18.116 5.84241 18.9426 6.4519 19.5521C7.0614 20.1616 7.88805 20.504 8.75 20.504H17.366C17.2107 20.9427 16.9233 21.3225 16.5433 21.5911C16.1633 21.8598 15.7094 22.004 15.244 22.004H8.75C7.49022 22.004 6.28204 21.5036 5.39124 20.6128C4.50045 19.722 4 18.5138 4 17.254V6.75C4 5.77 4.627 4.935 5.503 4.627ZM13.128 2C13.725 2 14.298 2.237 14.72 2.66L19.338 7.28C19.76 7.702 19.997 8.275 19.997 8.871V17.254C19.997 17.8507 19.7599 18.423 19.338 18.845C18.916 19.2669 18.3437 19.504 17.747 19.504H8.752C8.15526 19.504 7.58297 19.2669 7.16101 18.845C6.73905 18.423 6.502 17.8507 6.502 17.254V4.25C6.502 3.65326 6.73905 3.08097 7.16101 2.65901C7.58297 2.23705 8.15526 2 8.752 2H13.128ZM13 3.5H8.752C8.55309 3.5 8.36232 3.57902 8.22167 3.71967C8.08102 3.86032 8.002 4.05109 8.002 4.25V17.254C8.002 17.668 8.338 18.004 8.752 18.004H17.747C17.9459 18.004 18.1367 17.925 18.2773 17.7843C18.418 17.6437 18.497 17.4529 18.497 17.254V9.003H15.25C14.68 9.00309 14.1313 8.78686 13.7146 8.398C13.2979 8.00913 13.0443 7.47661 13.005 6.908L13 6.754V3.5ZM14.5 4.561L14.501 6.754C14.501 7.134 14.783 7.447 15.149 7.497L15.251 7.504L17.441 7.503L14.501 4.561H14.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Code>
            <Code
              onClick={() => {
                window.navigator.clipboard.writeText("fleet run");
              }}
            >
              <div class="flex justify-between">
                <h1>{">"} fleet run</h1>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.503 4.627L5.5 6.75V17.254C5.5 18.116 5.84241 18.9426 6.4519 19.5521C7.0614 20.1616 7.88805 20.504 8.75 20.504H17.366C17.2107 20.9427 16.9233 21.3225 16.5433 21.5911C16.1633 21.8598 15.7094 22.004 15.244 22.004H8.75C7.49022 22.004 6.28204 21.5036 5.39124 20.6128C4.50045 19.722 4 18.5138 4 17.254V6.75C4 5.77 4.627 4.935 5.503 4.627ZM13.128 2C13.725 2 14.298 2.237 14.72 2.66L19.338 7.28C19.76 7.702 19.997 8.275 19.997 8.871V17.254C19.997 17.8507 19.7599 18.423 19.338 18.845C18.916 19.2669 18.3437 19.504 17.747 19.504H8.752C8.15526 19.504 7.58297 19.2669 7.16101 18.845C6.73905 18.423 6.502 17.8507 6.502 17.254V4.25C6.502 3.65326 6.73905 3.08097 7.16101 2.65901C7.58297 2.23705 8.15526 2 8.752 2H13.128ZM13 3.5H8.752C8.55309 3.5 8.36232 3.57902 8.22167 3.71967C8.08102 3.86032 8.002 4.05109 8.002 4.25V17.254C8.002 17.668 8.338 18.004 8.752 18.004H17.747C17.9459 18.004 18.1367 17.925 18.2773 17.7843C18.418 17.6437 18.497 17.4529 18.497 17.254V9.003H15.25C14.68 9.00309 14.1313 8.78686 13.7146 8.398C13.2979 8.00913 13.0443 7.47661 13.005 6.908L13 6.754V3.5ZM14.5 4.561L14.501 6.754C14.501 7.134 14.783 7.447 15.149 7.497L15.251 7.504L17.441 7.503L14.501 4.561H14.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
