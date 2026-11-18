// Single source of truth for personal details. Edit here, the whole page updates.
export const profile = {
  name: 'Ali Raza',
  status: 'Software Engineering Student',
  degree: "Bachelor's in Software Engineering (BSSE)",
  degreeShort: 'BSSE',
  university: 'University of Management and Technology',
  universityShort: 'UMT',
  location: 'Sialkot, Pakistan',
  email: '24019065042@skt.umt.edu.pk',
}

export const socials = {
  instagram: {
    label: 'Instagram',
    handle: 'aliraza4.94a',
    href: 'https://www.instagram.com/aliraza4.94a?jplx=ZjVpN2o3cDcwcHJr',
  },
  snapchat: {
    label: 'Snapchat',
    handle: 'aliraza.494',
    href: 'https://www.snapchat.com/add/aliraza.494?share_id=ndWxmmf_yXk&locale=en-GB',
  },
  email: {
    label: 'University email',
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
}

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
