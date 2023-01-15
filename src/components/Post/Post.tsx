import React, { useState } from "react"
import { data } from "../../store/async/login/loginSlice"
import { useSelector } from "react-redux"
import {
  useFetchDeletePostMutation,
  useFetchPostsQuery,
  useFetchUpdatePostMutation,
} from "../../store/rtk/posts/postsApi"
import { IPost, TPost } from "../../models/models"
import { HiEye } from "react-icons/hi"
import { TbTrash } from "react-icons/tb"
import { FiEdit2 } from "react-icons/fi"

import { Modal } from "../Modal/Modal"
import {
  ModalButton,
  ModalInput,
  ModalTextArea,
} from "../StyledComponents/StyledComponents"
//error
const Post = () => {
  const [active, setActive] = useState<Boolean>(false)
  const { isLoading, isError, data: postsData } = useFetchPostsQuery(null)
  const [updatePost, { isSuccess }] = useFetchUpdatePostMutation()
  const [newPost, setNewPost] = useState<TPost>({
    title: "",
    text: "",
  })
  const changeHandler = (e: any) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    })
  }

  const [removePost] = useFetchDeletePostMutation()
  const userData = useSelector(data)

  const deletePost = async (_id: string) => {
    await removePost(_id).unwrap()
  }
  const onClickUpdatePost = async (_id: string) => {
    console.log(_id)
    await updatePost({ ...newPost, _id }).unwrap()
    setNewPost({ title: "", text: "" })
    setActive(false)
  }
  return (
    <>
      {postsData?.map((obj: IPost, index: number) => (
        <div
          key={index}
          className={
            "relative mx-auto w-[600px] h-[400px] mb-[70px] rounded-[10px] shadow-[0px_4px_20px_4px_rgba(119,53,136,0.459)]"
          }
        >
          <div>
            <h1 className="text-[30px] font-bold">{obj.title}</h1>
          </div>
          <div>{obj.text}</div>
          <div className="flex items-center w-[40px] text-[30px]">
            {obj.viewsCount} <HiEye />
          </div>

          {obj.user._id === userData?._id && (
            <>
              <div className="absolute flex justify-between top-5 right-4 w-16 h-10 rounded-md">
                <button
                  onClick={() => {
                    setActive(true)
                    console.log(obj._id)
                  }}
                >
                  <FiEdit2 color="white" size={"30px"} />
                </button>
                <button onClick={() => deletePost(obj._id)}>
                  <TbTrash color="red" size={"30px"} />
                </button>
              </div>

              <Modal active={active} setActive={setActive}>
                <div className={"flex flex-col justify-between"}>
                  <div className="text-center mb-5 font-black text-2xl">
                    Update Post
                  </div>
                  <div>
                    <div className="font-bold text-base">Title</div>
                    <ModalInput
                      value={newPost.title}
                      name={"title"}
                      onChange={changeHandler}
                      placeholder={"title"}
                      type="text"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-base">Text</div>
                    <ModalTextArea
                      value={newPost.text}
                      name={"text"}
                      onChange={changeHandler}
                      placeholder={"text..."}
                    />
                  </div>
                  <ModalButton onClick={() => onClickUpdatePost(obj._id)}>
                    Update
                  </ModalButton>
                </div>
              </Modal>
            </>
          )}

          <div className="text-lg font-bold">@{obj.user.name}</div>
        </div>
      ))}
    </>
  )
}

export { Post }
