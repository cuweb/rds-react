import React from 'react'

interface IconPathProps {
    icon: string
}

const IconPath: React.FC<IconPathProps> = ({ icon }): JSX.Element => {
    if (icon === 'cushield') {
        return (
            <g fill='none' fillRule='evenodd'>
                <path
                    d='M19.706 7.15l-3.787 4.085 1.638-7.144-2.18 1.154L13.74.798l-1.634 4.447-2.18-1.154 1.636 7.144-3.867-4.171-.251 1.82-3.172-.924 1.464 3.46-1.344.366 4.533 3.384c5.156-1.989 8.39-1.411 10.286-.643a11.828 11.828 0 01-1.237 3.037 7.1 7.1 0 00-.482-.242c-.659-.299-1.45-.54-2.402-.682a12.504 12.504 0 00-1.526-.13 15.591 15.591 0 00-.705-.003c-1.071.019-2.285.143-3.664.407l-.154.028c-.251.046-.495.084-.733.115-3.463.453-5.6-.573-6.882-1.742a12.259 12.259 0 01-.342-1.166c1.285 1.341 3.549 2.516 7.302 1.218l-5.07-3.786 1.763-.48-1.643-3.885 3.608 1.052.314-2.275 3.335 3.597-1.47-6.415 2.621 1.388L13.444.216c.21.028.42.058.629.091l1.564 4.256 2.622-1.388-1.47 6.415 2.92-3.149-.003.71'
                    fill='#FFFFFE'
                />
                <path
                    d='M8.374 17.862c-3.572.286-5.585-.71-6.72-1.944.183.453.394.898.633 1.335l.038.068c1.064.78 2.85 1.522 5.853 1.765 3.152.255 5.225 1.104 6.588 2.076a13.11 13.11 0 002.167-2.096c-1.543-.88-4.152-1.556-8.559-1.204'
                    fill='#FFFFFE'
                />
                <path
                    d='M2.325 17.321c1.705 3.082 4.444 4.829 7.61 6.206a.698.698 0 00.58 0c.928-.43 1.959-.86 2.829-1.39.503-.306.977-.632 1.422-.975-1.363-.972-3.436-1.821-6.588-2.076-3.002-.243-4.79-.984-5.853-1.765M9.196 16.914c-3.99.766-6.381-.331-7.769-1.598.07.202.145.403.226.602 1.136 1.234 3.15 2.23 6.721 1.944 4.407-.352 7.016.324 8.56 1.204.388-.477.736-.978 1.042-1.503-1.69-.928-4.412-1.486-8.78-.649'
                    fill='#0A0B09'
                />
                <path
                    d='M19.212 14.528c.24-.939.381-1.934.419-2.987.052-1.463.069-2.926.075-4.39l-3.787 4.084 1.638-7.144-2.18 1.154L13.74.798l-1.634 4.447-2.18-1.154 1.636 7.144-3.867-4.171-.251 1.82-3.172-.924 1.464 3.46-1.344.366 4.533 3.384c5.156-1.99 8.391-1.411 10.286-.642'
                    fill='#D8232A'
                />
                <g fill='#0A0B09'>
                    <path d='M18.26 3.175L16.79 9.59l2.919-3.149c.004-1.43.002-2.861.015-4.292.003-.26-.058-.405-.332-.499a31.232 31.232 0 00-5.32-1.343l1.565 4.256 2.622-1.388M8.387 15.367l-5.07-3.786 1.763-.48-1.643-3.885 3.608 1.052.314-2.275 3.335 3.597-1.47-6.415 2.621 1.388L13.444.216c-.44-.057-.88-.105-1.324-.14C8.365-.221 4.728.368 1.181 1.601c-.343.12-.46.273-.457.638.02 1.609.02 4.83.02 4.83 0 1.45-.015 2.9.003 4.352.012.935.126 1.845.338 2.73 1.285 1.34 3.55 2.514 7.302 1.216' />
                </g>
            </g>
        )
    }
    if (icon === 'alert') {
        return (
            <path d='M13.339 1.75a1.54 1.54 0 0 0-1.33-.75c-.551 0-1.055.285-1.33.75L.206 19.749a1.47 1.47 0 0 0 0 1.502c.29.465.795.751 1.33.751h20.946c.55 0 1.056-.285 1.315-.75.265-.465.27-1.033.015-1.503L13.34 1.75zm.2 17.246H10.48v-3.005h3.059v3.005zm0-4.506H10.48V8.48h3.059v6.01z' />
        )
    }
    if (icon === 'arrow-down') {
        return <path d='M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z' />
    }
    if (icon === 'github') {
        return (
            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z' />
        )
    }
    if (icon === 'info') {
        return (
            <path d='M10.8 8.074a1.615 1.615 0 0 1-.48-1.2c0-.48.154-.891.48-1.2.326-.308.72-.48 1.2-.48s.891.155 1.2.48c.309.326.48.72.48 1.2s-.154.892-.48 1.2a1.714 1.714 0 0 1-1.2.515c-.48 0-.891-.189-1.2-.515zm2.914 3.943a1.866 1.866 0 0 0-.531-1.183c-.343-.325-.72-.514-1.183-.531h-1.714c-.463.034-.823.223-1.183.531a1.748 1.748 0 0 0-.532 1.183h1.715v5.143c.034.463.188.857.531 1.183.343.343.72.531 1.183.531h1.714c.463 0 .823-.188 1.183-.531.343-.326.514-.72.532-1.183h-1.715V12v.017zM12 2.263c-5.383 0-9.771 4.354-9.771 9.737S6.617 21.771 12 21.771c5.383 0 9.771-4.371 9.771-9.771S17.383 2.246 12 2.246v.017zM12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.651 0 12 5.383 0 12 0z' />
        )
    }
    if (icon === 'plus') {
        return <path d='M24 14H14v10h-4V14H0v-4h10V0h4v10h10z' />
    }
    if (icon === 'verified') {
        return (
            <path d='M23.503 10.598l-1.62-2.01a2.25 2.25 0 0 1-.463-1.155l-.285-2.547A2.265 2.265 0 0 0 19.14 2.89l-2.548-.285c-.45-.045-.84-.239-1.17-.494L13.416.494a2.256 2.256 0 0 0-2.817 0l-2.01 1.62a2.25 2.25 0 0 1-1.155.465l-2.547.285a2.264 2.264 0 0 0-1.995 1.993l-.285 2.549c-.045.45-.238.84-.493 1.17L.494 10.58a2.256 2.256 0 0 0 0 2.817l1.62 2.01c.255.33.42.72.465 1.155l.285 2.547a2.264 2.264 0 0 0 1.993 1.995l2.549.285c.45.045.84.238 1.17.493l2.008 1.62a2.255 2.255 0 0 0 2.817 0l2.01-1.62c.33-.255.72-.42 1.155-.465l2.547-.285a2.264 2.264 0 0 0 1.995-1.993l.285-2.549c.045-.45.238-.84.493-1.17l1.62-2.008a2.256 2.256 0 0 0 0-2.817l-.003.002zM9.758 18L4.51 12.756l2.25-2.25 2.997 3 7.495-7.495L19.5 8.334l-9.743 9.667z' />
        )
    }
    if (icon === 'warning') {
        return (
            <g fill='none' fillRule='evenodd'>
                <circle cx='12' cy='12' fill='#000' r='10' />
                <path
                    d='M13.824 17.538H10V14.67h3.824zm0-4.301H10V5.07h3.824z'
                    fill='#fff'
                />
            </g>
        )
    }
    if (icon === 'x') {
        return (
            <path d='M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z' />
        )
    }
    if (icon === 'facebook') {
        return (
            <path d='M17.8 4.8h-2.4s-1.2.216-1.2 1.2v2.4h3.6l-1.2 4.8h-2.4V24H9.4V13.2H7V8.4h2.4V4.8S8.5 0 13.156 0H17.8v4.8z' />
        )
    }

    if (icon === 'instagram') {
        return (
            <path d='M22.29 5.343a.922.922 0 0 1-.922.92h-2.762a.921.921 0 0 1-.921-.92V2.579a.92.92 0 0 1 .92-.92h2.763c.51 0 .922.412.922.92v2.764zm-.184 15.735c0 .568-.458 1.028-1.024 1.028h-18.4c-.566 0-1.024-.46-1.024-1.028V9.764h2.315a8.27 8.27 0 0 0-.269 2.057c0 4.545 3.662 8.229 8.178 8.229 4.517 0 8.178-3.684 8.178-8.229 0-.71-.1-1.399-.268-2.057h2.314v11.314zM12.066 5.527a6.539 6.539 0 1 1 0 13.079 6.54 6.54 0 0 1 0-13.08zM21.186 0H2.763A2.763 2.763 0 0 0 0 2.763v18.421a2.763 2.763 0 0 0 2.763 2.764h18.422a2.763 2.763 0 0 0 2.763-2.764V2.764A2.762 2.762 0 0 0 21.185 0z' />
        )
    }

    if (icon === 'twitter') {
        return (
            <path d='M2.66 14.347a4.64 4.64 0 0 0 2.21-.093c-2.237-.49-3.917-2.646-3.917-5.24v-.066a4.586 4.586 0 0 0 2.209.662C1.852 8.657.992 7.017.992 5.165c0-.979.239-1.892.662-2.686C4.061 5.707 7.66 7.837 11.722 8.063a6.042 6.042 0 0 1-.12-1.218c0-2.95 2.184-5.345 4.883-5.345 1.402 0 2.672.648 3.559 1.693a9.23 9.23 0 0 0 3.109-1.296c-.37 1.244-1.138 2.289-2.144 2.95A9.06 9.06 0 0 0 23.814 4a10.308 10.308 0 0 1-2.447 2.779l.013.688c0 7.065-4.908 15.201-13.892 15.201-2.765 0-5.332-.886-7.488-2.394.37.04.767.066 1.164.066 2.289 0 4.393-.847 6.06-2.29-2.13-.039-3.943-1.587-4.565-3.703z' />
        )
    }

    if (icon === 'youtube') {
        return (
            <g fill='none'>
                <path
                    d='M23.498 6.64a3.016 3.016 0 0 0-2.121-2.135C19.505 4 12 4 12 4s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.64C0 8.524 0 12.454 0 12.454s0 3.93.502 5.815a3.016 3.016 0 0 0 2.121 2.135c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.121-2.135C24 16.385 24 12.454 24 12.454s0-3.93-.502-5.814'
                    fill='#222'
                />
                <path
                    d='M9.546 16.023l6.272-3.568-6.272-3.569z'
                    fill='#fffffe'
                />
            </g>
        )
    }

    if (icon === 'linkedin') {
        return (
            <path d='M5.407 23.512H.302V8.154h5.105v15.358zM8.23 8.154h5.105v2.176c.678-1.046 1.89-2.537 4.6-2.537 3.36 0 5.878 2.196 5.878 6.913v8.807H18.71v-8.218c0-2.064-.739-3.472-2.586-3.472-1.41 0-2.25.95-2.62 1.867-.134.328-.167.786-.167 1.245v8.577H8.232s.067-13.917 0-15.358zM2.888.75c1.746 0 2.82 1.147 2.854 2.653 0 1.474-1.108 2.655-2.887 2.655H2.82C1.108 6.058 0 4.878 0 3.403 0 1.897 1.141.75 2.888.75z' />
        )
    }

    if (icon === 'pinterest') {
        return (
            <path d='M11.085.08C7.123.523 3.173 3.724 3.01 8.296c-.103 2.793.692 4.888 3.352 5.477 1.154-2.034-.372-2.482-.61-3.956-.976-6.03 6.968-10.145 11.126-5.933 2.877 2.916.983 11.885-3.657 10.954-4.445-.892 2.176-8.032-1.372-9.433C8.964 4.265 7.433 8.89 8.8 11.186c-.802 3.951-2.529 7.673-1.83 12.628 2.267-1.642 3.032-4.785 3.658-8.063 1.14.69 1.749 1.408 3.201 1.521 5.358.414 8.351-5.339 7.62-10.65C20.8 1.916 16.098-.48 11.086.08' />
        )
    }

    return <div />
}
export default IconPath
