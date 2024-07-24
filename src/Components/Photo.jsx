import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export function Photo() {
  const data = [
    {
      label: "1",
      value: "html",
      images: [
        {
          imageLink:
            "https://i.pinimg.com/originals/f5/66/c6/f566c6acf9d5ee08ed6f20a497d93b6c.jpg",
        },
        {
          imageLink:
            "https://i.pinimg.com/736x/56/10/19/5610195ae334cf5f7f1f4e6893eb4d4e.jpg",
        },
        {
          imageLink:
            "https://i.pinimg.com/originals/97/f2/3b/97f23bc0eedf0bcbecce3e95d87a4fb3.jpg",
        },
        {
          imageLink:
            "https://i.pinimg.com/736x/56/10/19/5610195ae334cf5f7f1f4e6893eb4d4e.jpg",
          },
         {
          imageLink:
            "https://i.pinimg.com/564x/f8/f6/ea/f8f6ea22031a8461125232fc05aa5737.jpg",
        },
       
        {
          imageLink:
            "https://i.pinimg.com/564x/9f/a9/cb/9fa9cb3c917bc2383eaf4c10112bd1cf.jpg",
        },
      ],
    },
    {
      label: "2",
      value: "react",
      images: [
        {
          imageLink:
            "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
    {
      label: "3",
      value: "vue",
      images: [
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
          },
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
       
        {
          imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
      ],
    },
    {
      label: "4",
      value: "angular",
      images: [
        {
          imageLink:
            "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
    {
      label: "5",
      value: "svelte",
      images: [
        {
          imageLink:
            "https://i.pinimg.com/originals/f5/66/c6/f566c6acf9d5ee08ed6f20a497d93b6c.jpg",
          },
         {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
  ];
 
  return (
  //  <Tabs value="html" className=' space-y-6'>
     
  //     <TabsBody className="grid grid-cols-1 gap-4 md:w-[95%] w-[97%] mx-auto bg-red-200">
  //       {data.map(({ value, images }) => (
  //         <TabPanel
  //           className="grid grid-cols-2 gap-4 md:grid-cols-3 "
  //           key={value}
  //           value={value}
  //         >
  //           {images?.map(({ imageLink }, index) => (
  //             <div key={index} className="relative group">
  //               <img
  //                 className="lg:h-80 md:h-[15rem] h-[11rem] w-full rounded-lg  object-cover object-center"
  //                 src={imageLink}
  //                 alt={`Image ${index}`}
  //               />
  //               <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 
  //               transition-opacity duration-300 ease-in-out rounded-lg"></div>
  //             </div>
  //           ))}
  //         </TabPanel>
  //       ))}
  //     </TabsBody>

  //      <TabsHeader className="md:w-[95%] w-[97%] mx-auto">
  //       {data.map(({ label, value }) => (
  //         <Tab key={value} value={value}>
  //           {label}
  //         </Tab>
  //       ))}
  //     </TabsHeader>
  //   </Tabs>
  
  
  <Tabs value="html" className='space-y-6'>
  <TabsBody className="grid grid-cols-1 gap-4 w-full mx-0">
    {data.map(({ value, images }) => (
      <TabPanel
        className="grid grid-cols-2 gap-4 md:grid-cols-3 w-full mx-0"
        key={value}
        value={value}
      >
        {images?.map(({ imageLink }, index) => (
          <div key={index} className="relative group">
            <img
              className="lg:h-80 md:h-[15rem] h-[11rem] w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt={`Image ${index}`}
            />
            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300 ease-in-out rounded-lg"></div>
          </div>
        ))}
      </TabPanel>
    ))}
  </TabsBody>

  <TabsHeader className="md:w-[95%] w-[97%] mx-auto">
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
        {label}
      </Tab>
    ))}
  </TabsHeader>
</Tabs>

  );
}