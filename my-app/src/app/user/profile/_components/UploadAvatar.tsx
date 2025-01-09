"use client";
import FileInput from '@/app/components/fileUpload';
import { PencilIcon } from '@heroicons/react/24/solid'
import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'

const UploadAvatar = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [image, setImage] = React.useState<File | null>(null);
  return (
      <div>
          <button onClick={isOpen ? onOpenChange : onOpen}>
               <PencilIcon className='w-6 h-6 text-slate-400 hover:text-primary transition-colors' />
          </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Upload Profile Image</ModalHeader>
              <ModalBody>
               <FileInput onChange={(e) => setImage((e as any).target.files[0])} />
                {image && <Image src={URL.createObjectURL(image)} alt="profile image" width={500} height={500} />}   
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Upload
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default UploadAvatar